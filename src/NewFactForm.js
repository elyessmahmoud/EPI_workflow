import React, { useState } from "react";
import { CATEGORIES } from "./globals";
import supabase from "./supabase";

const categories = CATEGORIES;

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  async function handleSubmit(evt) {
    // prevent browser reload
    evt.preventDefault();

    // check if data is valid , if create new fatc
    if (text && isValidHttpUrl(source) && category && textLength <= 400) {
      // Upload fact and recieve the new one
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }]) // insert new facts
        .select(); // select to rerendering the DOM when insert new facts

      setIsUploading(false);

      // add the new fact to the ui : on state
      setFacts((facts) => [newFact, ...facts]); // the [0] that's to add the new fact to supabase and the local list at the same time

      // reset the input field
      setText("");
      setCategory("");
      setSource("");

      // close the form

      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <textarea maxLength="10" />
      <span>{400 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(evt) => setSource(evt.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(evt) => setCategory(evt.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {categories.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;

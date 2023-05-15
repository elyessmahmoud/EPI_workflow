import React from "react";
import { CATEGORIES } from "./globals";
import supabase from "./supabase";
import { useState } from "react";

const categories = CATEGORIES;

function Fact({ fact, setFacts }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;
  async function handleVote(colomName) {
    setIsUpdating(true);
    const { data: updateFact, error } = await supabase
      .from("facts")
      .update({ [colomName]: fact[colomName] + 1 })
      .eq("id", fact.id)
      .select();

    setIsUpdating(false);

    if (!error)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updateFact[0] : f))
      );
  }
  return (
    <ul className="facts-list">
      <li key={fact.id} className="fact">
        <p>
          {isDisputed ? (
            <span className="disputed">[ ⛔️ Disputed !!! ]</span>
          ) : null}
          {fact.text}
          <a className="source" href={fact.source} target="_blank">
            (Take a look!)
          </a>
        </p>
        <span
          className="tag"
          style={{
            backgroundColor: CATEGORIES.find(
              (cat) => cat.name === fact.category
            ).color,
          }}
        >
          {fact.category}
        </span>
        <div className="vote-buttons">
          <button
            onClick={() => {
              handleVote("votesInteresting");
            }}
            disabled={isUpdating}
          >
            👍 {fact.votesInteresting}
          </button>
          <button
            onClick={() => {
              handleVote("votesMindblowing");
            }}
            disabled={isUpdating}
          >
            🤯 {fact.votesMindblowing}
          </button>
          <button
            onClick={() => {
              handleVote("votesFalse");
            }}
            disabled={isUpdating}
          >
            ⛔️ {fact.votesFalse}
          </button>
        </div>
      </li>
    </ul>
  );
}

export default Fact;

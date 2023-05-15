import "./style.css";
import FactList from "./FactList";
import CategoryFilter from "./CategoryFilter";
import { initialFacts } from "./globals";
import React, { useEffect, useState } from "react";
import NewFactForm from "./NewFactForm";
import Header from "./Header";
import supabase from "./supabase";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [currentCategory, setcurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);
        // we make the query to setUp the form of the request from spupabase
        let query = supabase.from("facts").select("*");
        // check the props currentCategory sending from the filater
        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);
        // exexute the request with order and limites
        const { data: facts, error } = await query
          .order("created_at", { ascending: false })
          .limit(50);
        // handel Error of the request
        if (!error) setFacts(facts);
        else alert("There was a problem getting data");
        setIsLoading(false);
      }
      getFacts();
    },

    // dependencie array we make it to reload data even in useEffect
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className="main">
        <CategoryFilter setcurrentCategory={setcurrentCategory} />
        {isLoding ? <Loader /> : <FactList facts={facts} setFacts={setFacts} />}
      </main>
    </>
  );
}

function Loader() {
  return <h1 className="title">is Loading ...</h1>;
}

export default App;

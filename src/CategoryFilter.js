import React from "react";
import { CATEGORIES } from "./globals";

function CategoryFilter({ setcurrentCategory }) {
  const category = CATEGORIES;
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setcurrentCategory("all")}
          >
            All
          </button>
        </li>
        <li className="category">
          {category.map((cat) => (
            <p key={cat.name} className="category">
              <button
                className="btn btn-category"
                style={{ backgroundColor: cat.color }}
                onClick={() => setcurrentCategory(cat.name)}
              >
                {cat.name}
              </button>
            </p>
          ))}
        </li>
      </ul>
    </aside>
  );
}

export default CategoryFilter;

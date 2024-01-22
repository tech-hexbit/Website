import React from "react";

// css
import fc from "./Css/FilteredCatergory.module.css";

export default function FilteredCatergory({
  selectedCategories,
  onCategoryClick,
}) {
  console.log(selectedCategories);
  return (
    <>
      <article>
        <h1>Select the Category List</h1>
      </article>

      <main className={fc.grid}>
        {selectedCategories.map((category) => (
          <div
            key={category._id}
            className={fc.gridCard}
            onClick={() => onCategoryClick(category)}
          >
            <img
              src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={category.name}
            />
            <div className={fc.text}>{category.name}</div>
          </div>
        ))}
      </main>
    </>
  );
}

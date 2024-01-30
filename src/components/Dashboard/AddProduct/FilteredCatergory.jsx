import React from "react";

// css
import fc from "./Css/FilteredCatergory.module.css";

export default function FilteredCatergory({
  selectedCategories,
  onCategoryClick,
}) {
  return (
    <>
      <article>
        <h1>Select the Category List</h1>
      </article>

      <main className={fc.grid}>
        {selectedCategories.map((category, key) => (
          <div
            key={key}
            className={fc.gridCard}
            onClick={() => onCategoryClick(category)}
          >
            <img src={category.img} alt={category.name} />
            <div className={fc.text}>{category.name}</div>
          </div>
        ))}
      </main>
    </>
  );
}

import React from "react";
import PropTypes from "prop-types";

// component
import ImgComp from "./ImgComp";

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
            <ImgComp src={category.img} blur={category.hash} />
            <img src={category.img} alt={category.name} />
            <div className={fc.text}>{category.name}</div>
          </div>
        ))}
      </main>
    </>
  );
}

FilteredCatergory.propTypes = {
  selectedCategories: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

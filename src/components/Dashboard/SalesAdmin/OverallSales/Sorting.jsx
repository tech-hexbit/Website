import React from "react";
import osCss from "../Css/overallSales.module.css";

export const sortByDate = (
  sortDateOrder,
  setSortDateOrder,
  orderDel,
  setOrderDel
) => {
  const newSortOrder = sortDateOrder === "asc" ? "desc" : "asc";
  setSortDateOrder(newSortOrder);

  const sortedOrderDel = [...orderDel].sort((a, b) => {
    if (newSortOrder === "asc") {
      return new Date(a.when.date) - new Date(b.when.date);
    } else {
      return new Date(b.when.date) - new Date(a.when.date);
    }
  });

  setOrderDel(sortedOrderDel);
};
export const sortByPrice = (
  sortPriceOrder,
  setSortPriceOrder,
  orderDel,
  setOrderDel
) => {
  const newSortOrder = sortPriceOrder === "asc" ? "desc" : "asc";
  setSortPriceOrder(newSortOrder);

  const sortedOrderDel = [...orderDel].sort((a, b) => {
    if (newSortOrder === "asc") {
      return a.amount - b.amount;
    } else {
      return b.amount - a.amount;
    }
  });

  setOrderDel(sortedOrderDel);
};
export const sortByName = (
  sortByNameOrder,
  setSortByNameOrder,
  orderDel,
  setOrderDel
) => {
  const newSortOrder = sortByNameOrder === "asc" ? "desc" : "asc";
  setSortByNameOrder(newSortOrder);

  const sortedOrderDel = [...orderDel].sort((a, b) => {
    if (newSortOrder === "asc") {
      return a.ONDCBilling.name.localeCompare(b.ONDCBilling.name);
    } else {
      return b.ONDCBilling.name.localeCompare(a.ONDCBilling.name);
    }
  });

  setOrderDel(sortedOrderDel);
};
// export default { sortByPrice };

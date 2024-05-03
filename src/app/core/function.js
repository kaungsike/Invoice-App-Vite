import { totalCost } from "./selectors.js";


export const updateTotalCost = () => {
    const allRowCost = document.querySelectorAll(".product-cost");
    totalCost.innerText = ([...allRowCost].reduce((pv,{innerText}) => pv+parseFloat(innerText),0).toFixed(2))
}
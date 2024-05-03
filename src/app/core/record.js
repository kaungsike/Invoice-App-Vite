import { updateTotalCost } from "./function.js";
import { rowGroup, rowTemplate } from "./selectors.js"


export const createRecord = ({name,price,id},quantity) => {
    const record = rowTemplate.content.cloneNode(true);

    record.querySelector(".row").setAttribute("product-id",id)
    record.querySelector(".product-name").innerText = name;
    record.querySelector(".product-price").innerText = price;
    record.querySelector(".product-quantity").innerText = quantity;
    record.querySelector(".product-cost").innerText = (quantity*price).toFixed(2);

    return record
}   

export const deleteRecord = (e) => {
    const row = e.target.closest(".row");
    if(confirm("Are you sure to delete?")){
        row.remove();
        updateTotalCost()
    }
}

export const updateQuantity = (productId,p) => {
    const row = document.querySelector(`[product-id='${productId}']`)
    const currentQuantity = row.querySelector(".product-quantity");
    const price = row.querySelector(".product-price");
    const currentCost = row.querySelector(".product-cost");

    

    if(p > 0 || currentQuantity.innerText >1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) + p;
    }

    currentCost.innerText = (price.innerText*currentQuantity.innerText).toFixed(2)
}

export const addQuantity = (e) => {
    const row = e.target.closest(".row");
    const currentQuantity = row.querySelector(".product-quantity");
    const price = row.querySelector(".product-price");
    const currentCost = row.querySelector(".product-cost");

    currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;

    currentCost.innerText = (price.innerText*currentQuantity.innerText).toFixed(2)
}

export const subQuantity = (e) => {
    const row = e.target.closest(".row");
    const currentQuantity = row.querySelector(".product-quantity");
    const price = row.querySelector(".product-price");
    const currentCost = row.querySelector(".product-cost");

    if(currentQuantity.innerText>1){
        currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
    }
    else{
        deleteRecord(e)
    }

    currentCost.innerText = (price.innerText*currentQuantity.innerText).toFixed(2)
}

export const recordObserver = () => {
    const run = () => {
        updateTotalCost();
    }
    const observerOption = {
        childList: true,
        subtree: true,
    }

    const observer = new MutationObserver(run);
    observer.observe(rowGroup,observerOption)
}
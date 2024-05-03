import { updateTotalCost } from "./function.js";
import { productRender } from "./initialRender.js";
import { createSelectProduct, createSheetProduct } from "./product.js";
import { addQuantity, createRecord, deleteRecord, subQuantity, updateQuantity } from "./record.js";
import { createForm, createSheetProductForm, inventorySheet, productGroup, rowGroup } from "./selectors.js";
import cameraModels from "./variable.js";


export const createRecordHandler = (e) => {
    e.preventDefault();
    const fromData = new FormData(createForm);

    const productId = fromData.get("productSelect");
    const productQuantity = fromData.get("inputQuantity");
    
    const productInfo = cameraModels.find((el) => el.id===parseInt(productId))

    const isExistRow = document.querySelector(`[product-id='${productId}']`)

    if(isExistRow){
        // const currentQuantity = isExistRow.querySelector(".product-quantity");
        // const price = isExistRow.querySelector(".product-price");
        // const productCost = isExistRow.querySelector(".product-cost");

        // currentQuantity.innerText =parseInt(currentQuantity.innerText) + parseInt(productQuantity);

        // productCost.innerText = (price.innerText*currentQuantity.innerText).toFixed(2)
        updateQuantity(isExistRow.getAttribute("product-id"),parseInt(productQuantity))
    }
    else{
        rowGroup.append(createRecord(productInfo,productQuantity));
    }

    createForm.reset();

    // updateTotalCost();
}

export const updateRecord = (e) => {
    if(e.target.classList.contains("delBtn")){
        deleteRecord(e)
    }
    else if(e.target.classList.contains("addQuantityBtn")){
        updateQuantity(e.target.closest(".row").getAttribute("product-id"),+1);
    }else if(e.target.classList.contains("subQuantityBtn")){
        updateQuantity(e.target.closest(".row").getAttribute("product-id"),-1)
    }
    // updateTotalCost();
}

export const inventoryBtnHandler = () => {
    inventorySheet.classList.toggle("-translate-x-full")
}

export const createSheetProductHandler = () => {
    productGroup.innerHTML = "";
    cameraModels.forEach((el) => productGroup.append(createSheetProduct(el)))
}

export const addNewProductHandler = (e) => {
    e.preventDefault()
    const fromData = new FormData(createSheetProductForm);

    const newProduct = {
        id : Date.now(),
        name : fromData.get("inputNewProductName"),
        price : fromData.get("inputNewProductPrice")
    }

    cameraModels.push(newProduct);
    productRender()

    createSheetProductForm.reset();
}

export const printBtnHandler = () => {
    window.print();
}
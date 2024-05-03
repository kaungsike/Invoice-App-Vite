import { productSelect, sheetProductTemplate } from "./selectors.js"


export const createSelectProduct = (product) => {
    productSelect.innerHTML = "";
    product.forEach((el) => productSelect.append(new Option(el.name,el.id)))
}

export const createSheetProduct = (product) => {
    const card = sheetProductTemplate.content.cloneNode(true);

    const name = card.querySelector(".product-name")
    const price = card.querySelector(".product-price")

    name.innerText = product.name;
    price.innerText = product.price;

    return card;

}
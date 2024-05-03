import { addNewProductHandler, createRecordHandler, inventoryBtnHandler, printBtnHandler, updateRecord } from "./handler.js";
import { closeInventoryBtn, createForm, createSheetProductForm, openInventoryBtn, printBtn, rowGroup } from "./selectors.js"

const listener = () => {
    createForm.addEventListener("submit",createRecordHandler);
    rowGroup.addEventListener("click",updateRecord);
    openInventoryBtn.addEventListener("click",inventoryBtnHandler);
    closeInventoryBtn.addEventListener("click",inventoryBtnHandler)
    createSheetProductForm.addEventListener("submit",addNewProductHandler)
    printBtn.addEventListener("click",printBtnHandler)
}

export default listener;
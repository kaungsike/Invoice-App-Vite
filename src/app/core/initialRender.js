import { createSheetProductHandler } from "./handler.js";
import { createSelectProduct } from "./product.js"
import cameraModels from "./variable.js"

export const productRender = () => {
    createSelectProduct(cameraModels);
    createSheetProductHandler()
}
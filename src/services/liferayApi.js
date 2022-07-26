import apiConfig from "./apiConfig"

const UploadProduct = async (body) => {
  apiConfig.post("/o/headless-commerce-admin-catalog/v1.0/products/batch", body)
}

export default UploadProduct

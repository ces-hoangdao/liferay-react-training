import apiConfig from "./apiConfig"
import { SERVICE_PATH } from "../constants/constants"

const importProducts = async (body) => {
  apiConfig.post(SERVICE_PATH.importProductURL, body)
}

export default importProducts

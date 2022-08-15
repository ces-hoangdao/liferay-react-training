import apiConfig from './apiConfig'
import { SERVICE_PATH } from '../constants/urlConstant'

const getAccounts = async (body) => {
  return apiConfig.get(SERVICE_PATH.getAccounts, body)
}

export { getAccounts }

import apiConfig from './apiConfig'
import { SERVICE_PATH } from '../constants/urlConstant'

const getOrders = async ({ body, page, pageSize, filter }) =>
  apiConfig.get(
    `${SERVICE_PATH.getOrders}&filter=${filter}&page=${page + 1}&pageSize=${pageSize}`,
    body
  )

const getAllForChart = async ({ body, filter }) => {
  return apiConfig.get(`${SERVICE_PATH.getOrders}&filter=${filter}`, body)
}

const getOrderById = async (body, orderId) =>
  apiConfig.get(`${SERVICE_PATH.getOrders}/${orderId}`, body)

export { getOrders, getOrderById, getAllForChart }

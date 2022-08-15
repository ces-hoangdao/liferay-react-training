const ORDER_STATUS = [
  { code: 0, label: 'COMPLETED', color: '#20B9FC' },
  { code: 1, label: 'PENDING', color: '#E44840' },
  { code: 2, label: 'OPEN', color: '#9772E5' },
  { code: 6, label: 'IN PROGRESS', color: '#DFFFD6' },
  { code: 8, label: 'CANCELLED', color: '#999' },
  { code: 10, label: 'PROCESSING', color: '#CB3161' },
  { code: 14, label: 'PARTIAL SHIPPED ', color: '#2E5AAC' },
  { code: 15, label: 'SHIPPED', color: '#5664FA' },
  { code: 20, label: 'ON HOLD', color: '#FC6B21' },
]
const STATUS = new Map(ORDER_STATUS.map((status) => [status.code, status]))
export { STATUS }

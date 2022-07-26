const PRODUCT_FIELD_MAPPING = [
  { name: "External Reference Code", key: "externalReferenceCode" },
  { name: "Name", key: "name" },
  { name: "Description", key: "description" },
  { name: "Product Type", key: "productType" },
  { name: "Create Date", key: "createDate" },
  { name: "Modified Date", key: "modifiedDate" },
  { name: "Expiration Date", key: "expirationDate" },
  { name: "Catalog Id", key: "catalogId" },
  { name: "Is Active", key: "active" },
]
const FILE_TYPES = ["CSV"]

const MAPPING = [
  { headerIndex: 0, fieldMapping: "" },
  { headerIndex: 1, fieldMapping: "" },
  { headerIndex: 2, fieldMapping: "" },
  { headerIndex: 3, fieldMapping: "" },
  { headerIndex: 4, fieldMapping: "" },
  { headerIndex: 5, fieldMapping: "" },
  { headerIndex: 6, fieldMapping: "" },
  { headerIndex: 7, fieldMapping: "" },
  { headerIndex: 8, fieldMapping: "" },
]

export { FILE_TYPES, PRODUCT_FIELD_MAPPING, MAPPING }

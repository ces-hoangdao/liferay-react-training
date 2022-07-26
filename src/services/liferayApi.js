import apiConfig from "./apiConfig"

const submitInsuranceProfile = async (body) =>
  apiConfig.post("/o/c/insuranceformsubmissions", body)

export default submitInsuranceProfile

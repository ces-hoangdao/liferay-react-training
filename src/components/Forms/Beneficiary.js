import { useDispatch, useSelector } from "react-redux"
import { formActions } from "../../redux/formSlice"
import InputWrapper from "../FormElements/InputWrapper/InputWrapper"
import SelectInput from "../FormElements/Select/Select"
import { RELATIONSHIP_OPTION } from "../../constants/formConstants"

function Beneficiary() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.form.data)
  const handleChange = (e) => {
    dispatch(
      formActions.setData({ fieldName: e.target.name, value: e.target.value })
    )
  }

  return (
    <>
      <SelectInput
        value={data.relationShip}
        label="Relationship with me"
        name="relationShip"
        handleChange={handleChange}
        required
        options={RELATIONSHIP_OPTION}
      />

      <InputWrapper
        label="First Name"
        name="beneficiaryFirstName"
        handleChange={handleChange}
        value={data.beneficiaryFirstName}
        required
        type="text"
      />
      <InputWrapper
        label="Middle Name"
        name="beneficiaryMiddleName"
        handleChange={handleChange}
        value={data.beneficiaryMiddleName}
        required={false}
        type="text"
      />
      <InputWrapper
        label="Last Name"
        name="beneficiaryLastName"
        handleChange={handleChange}
        value={data.beneficiaryLastName}
        required
        type="text"
      />
      <InputWrapper
        label="Birthday"
        name="beneficiaryBirthday"
        handleChange={handleChange}
        value={data.beneficiaryBirthday}
        type="date"
        required
      />
      <InputWrapper
        label="ID Card"
        name="beneficiaryIDcard"
        handleChange={handleChange}
        value={data.beneficiaryIDcard}
        required
        type="text"
      />

      <InputWrapper
        label="Phone Number"
        name="beneficiaryPhoneNumber"
        handleChange={handleChange}
        value={data.beneficiaryPhoneNumber}
        required
        type="text"
      />
    </>
  )
}

export default Beneficiary

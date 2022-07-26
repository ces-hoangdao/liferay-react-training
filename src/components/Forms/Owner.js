import { useDispatch, useSelector } from "react-redux"
import { formActions } from "../../redux/formSlice"
import InputWrapper from "../FormElements/InputWrapper"

function Owner() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.form.data)
  const handleChange = (e) => {
    dispatch(
      formActions.setData({ fieldName: e.target.name, value: e.target.value })
    )
  }
  return (
    <>
      <InputWrapper
        label="First Name"
        name="firstName"
        handleChange={handleChange}
        value={data.firstName}
        required
        type="text"
      />
      <InputWrapper
        label="Middle Name"
        name="middleName"
        handleChange={handleChange}
        value={data.middleName}
        required={false}
        type="text"
      />
      <InputWrapper
        label="Last Name"
        name="lastName"
        handleChange={handleChange}
        value={data.lastName}
        required
        type="text"
      />

      <InputWrapper
        label="Birthday"
        name="birthday"
        handleChange={handleChange}
        value={data.birthday}
        type="date"
        required
      />
      <InputWrapper
        label="ID Card"
        name="iDcard"
        handleChange={handleChange}
        value={data.iDcard}
        required
        type="text"
      />

      <InputWrapper
        label="Phone Number"
        name="phoneNumber"
        handleChange={handleChange}
        value={data.phoneNumber}
        required
        type="text"
      />
      <InputWrapper
        label="Monthly Saving"
        name="monthlySaving"
        handleChange={handleChange}
        value={data.monthlySaving}
        required
        type="text"
      />
    </>
  )
}

export default Owner

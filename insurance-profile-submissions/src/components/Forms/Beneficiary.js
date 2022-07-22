import { formActions } from "../../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";
import InputWrapper from "../FormElements/InputWrapper";
import SelectInput from "../FormElements/Select";

const Beneficiary = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);
  const handleChange = (e) => {
    dispatch(
      formActions.setData({ fieldName: e.target.name, value: e.target.value })
    );
  };
  const onSubmit = () => {
    dispatch(formActions.goNext());
  };
  const goPrev = () => dispatch(formActions.goPrev());
  return (
    <form className="form">
      <h1>Beneficiary Information</h1>
      <SelectInput
        data={data}
        label="Relationship with me"
        name="relationShip"
        handleChange={handleChange}
        required={true}
      />
      <div className="form-row">
        <InputWrapper
          label="First Name"
          name="beneficiaryFirstName"
          handleChange={handleChange}
          data={data}
          required={true}
        />
        <InputWrapper
          label="Middle Name"
          name="beneficiaryMiddleName"
          handleChange={handleChange}
          data={data}
        />
        <InputWrapper
          label="Last Name"
          name="beneficiaryLastName"
          handleChange={handleChange}
          data={data}
          required={true}
        />
      </div>
      <div className="form-row">
        <InputWrapper
          label="Birthday"
          name="beneficiaryBirthday"
          handleChange={handleChange}
          data={data}
          type="date"
          required={true}
        />
        <InputWrapper
          label="ID Card"
          name="beneficiaryIDcard"
          handleChange={handleChange}
          data={data}
          required={true}
        />
      </div>
      <InputWrapper
        label="Phone Number"
        name="beneficiaryPhoneNumber"
        handleChange={handleChange}
        data={data}
        required={true}
      />

      <div className="btn-group">
        <button className="btn btn-prev" onClick={goPrev}>
          Previous
        </button>
        <button className="btn btn-submit" onClick={onSubmit}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default Beneficiary;

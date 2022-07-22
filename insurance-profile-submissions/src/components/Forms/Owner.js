import { formActions } from "../../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";
import InputWrapper from "../FormElements/InputWrapper";

const Owner = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);
  const onSubmit = () => {
    dispatch(formActions.goNext());
  };
  const handleChange = (e) => {
    dispatch(
      formActions.setData({ fieldName: e.target.name, value: e.target.value })
    );
  };

  return (
    <form className="form">
      <h1>Owner Information</h1>
      <div className="form-row">
        <InputWrapper
          label="First Name"
          name="firstName"
          handleChange={handleChange}
          data={data}
          required={true}
        />
        <InputWrapper
          label="Middle Name"
          name="middleName"
          handleChange={handleChange}
          data={data}
        />
        <InputWrapper
          label="Last Name"
          name="lastName"
          handleChange={handleChange}
          data={data}
          required={true}
        />
      </div>
      <div className="form-row">
        <InputWrapper
          label="Birthday"
          name="birthday"
          handleChange={handleChange}
          data={data}
          type="date"
          required={true}
        />
        <InputWrapper
          label="ID Card"
          name="IDcard"
          handleChange={handleChange}
          data={data}
          required={true}
        />
      </div>
      <div className="form-row">
        <InputWrapper
          label="Phone Number"
          name="phoneNumber"
          handleChange={handleChange}
          data={data}
          required={true}
        />
        <InputWrapper
          label="Monthly Saving"
          name="monthlySaving"
          handleChange={handleChange}
          data={data}
          required={true}
        />
      </div>
      <div className="btn-group" id="group-one">
        <button className="btn btn-submit" onClick={onSubmit}>
          Continue
        </button>
      </div>
    </form>
  );
};

export default Owner;

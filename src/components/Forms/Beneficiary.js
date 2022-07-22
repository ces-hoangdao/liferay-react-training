import { formActions } from "../../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";
import InputWrapper from "../FormElements/InputWrapper";
import SelectInput from "../FormElements/Select";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { beneficiarySchema } from "../../services/schema";

const Beneficiary = () => {
  const dispatch = useDispatch();
  const methods = useForm({
    resolver: yupResolver(beneficiarySchema),
    mode: "all",
  });
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
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <SelectInput
          data={data}
          label="Relationship with me"
          name="relationShip"
          handleChange={handleChange}
          required={true}
        />

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
          <button className="btn btn-submit" type="submit">
            Continue
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Beneficiary;

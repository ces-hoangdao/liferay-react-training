import { formActions } from "../../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";
import InputWrapper from "../FormElements/InputWrapper";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ownerSchema } from "../../services/schema";

const Owner = () => {
  const dispatch = useDispatch();
  const methods = useForm({ resolver: yupResolver(ownerSchema), mode: "all" });
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
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
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

        <div className="btn-group" id="group-one">
          <button className="btn btn-submit" type="submit">
            Continue
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Owner;

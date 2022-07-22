import { useForm, Controller } from "react-hook-form";
import ErrorMess from "../ErrorMess";
import { formActions } from "../../redux/form-slice";
import { useDispatch, useSelector } from "react-redux";
import LiferayApi from "../../services/LiferayApi";
import Checkbox from "@mui/material/Checkbox";
const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all", mode: "onChange" });
  const onSubmit = () => {
    let url = "o/c/insuranceformsubmits";
    const POST = async () => {
      const response = await LiferayApi.post(url, {
        body: data,
      })
        .then((response) => {
          dispatch(formActions.goNext());
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(response);
    };
    POST();
  };
  const goPrev = () => dispatch(formActions.goPrev());
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Confirm contract</h1>
      <div className="detail-contract">
        <p>Please see the detailed contract</p>
        <a href="https://www.chubb.com/content/dam/chubb-sites/chubb-com/personal/future-asset-management-universal-life/documents/pdf/easset_upload_file46289_1304437_e.pdf">
          here
        </a>
      </div>
      <div className="checkbox-area">
        <p>
          I agree to submit my information to the Insurance Company after
          checking the online contract
        </p>
        <Controller
          name="acceptTerms"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              id="agree"
              name="agree"
              {...register("acceptTerms", {
                required: "Accept Terms & condition is required",
              })}
            />
          )}
        />

        <ErrorMess errors={errors} name="acceptTerms" />
      </div>
      <div className="btn-group">
        <button className="btn btn-prev" onClick={goPrev}>
          Previous
        </button>
        <button className="btn btn-submit" type="submit">
          {" "}
          Submit{" "}
        </button>
      </div>
    </form>
  );
};

export default Contact;

"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  cv: FileList;
}
const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="md:mt-10 mt-7">
      <form
        className="grid sm:grid-cols-2 grid-cols-1  md:gap-5 gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid md:gap-5 gap-4">
          <div>
            <input
              placeholder="Enter your name"
              className="md:px-4 px-3 w-full md:py-3 py-2 bg-slate-100 rounded-md"
              type="text"
              {...register("name", { required: "Name is required!" })}
            />
            <br />
            {errors?.name && (
              <span className="inline-block md:text-sm text-xs text-red-500">
                {errors?.name?.message}
              </span>
            )}
          </div>

          <div>
            <input
              placeholder="Enter your email"
              className="md:px-4 w-full px-3 md:py-3 py-2 bg-slate-100 rounded-md"
              type="email"
              {...register("email", { required: "Email is required!" })}
            />
            <br />
            {errors?.email && (
              <span className="inline-block md:text-sm text-xs text-red-500">
                {errors?.email?.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid md:gap-5 gap-4">
          <div>
            <input
              placeholder="Enter your phone number"
              className="md:px-4 w-full px-3 md:py-3 py-2 bg-slate-100 rounded-md"
              type="text"
              {...register("phoneNumber", {
                required: "Phone number is required!",
              })}
            />
            <br />
            {errors?.phoneNumber && (
              <span className="inline-block md:text-sm text-xs text-red-500">
                {errors?.phoneNumber?.message}
              </span>
            )}
          </div>

          <div>
            <input
              placeholder="Enter your address"
              className="md:px-4 w-full px-3 md:py-3 py-2 bg-slate-100 rounded-md"
              type="text"
              {...register("address", { required: "Address is required!" })}
            />
            <br />
            {errors?.phoneNumber && (
              <span className="inline-block md:text-sm text-xs text-red-500">
                {errors?.phoneNumber?.message}
              </span>
            )}
          </div>
        </div>

        <div className="md:col-span-2 col-span-1">
          <label htmlFor="">Upload CV*</label>
          <input
            placeholder="upload cv"
            className="md:px-4 px-3 w-full md:py-3 py-2 bg-slate-100 rounded-md"
            type="file"
            {...register("cv", { required: "CV is must need!" })}
          />
          <br />
          {errors?.cv && (
            <span className="inline-block md:text-sm text-xs text-red-500">
              {errors?.cv?.message}
            </span>
          )}
        </div>

        <div className="text-center md:col-span-2 ">
          <button
            type="submit"
            className="bg-yellow-300 rounded-lg md:px-5 px-4 md:py-3  py-2 md:text-base text-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;

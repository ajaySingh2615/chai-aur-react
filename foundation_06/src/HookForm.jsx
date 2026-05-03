import { useState } from "react";
import { useForm } from "react-hook-form";

const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
      isSubmitted,
      getValues,
    },
  } = useForm({ defaultValues: { name: "hitesh" }, mode: "onTouched" });

  function submit(data) {
    return new Promise((res) => console.log("submitted", data));
  }

  if (isSubmitSuccessful) {
    return (
      <div>
        <h1>Form Submitted Successfully!</h1>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="full-name">Full Name</label>
        <input
          id="full-name"
          {...register("name", { required: "Full Name is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default HookForm;

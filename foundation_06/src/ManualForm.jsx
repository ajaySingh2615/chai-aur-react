import { useState } from "react";

const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

function ManualForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "Frontend Developer",
    experience: "",
    cover: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function set(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate(v) {
    const e = {};
    if (!v.name.trim()) e.name = "Name is required";

    return e;
  }

  function submit(ev) {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    fetch();
    return (
      <div>
        <h1>Form Submitted Successfully!</h1>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={submit} noValidate>
        <label htmlFor="full-name">
          full name
          <input type="text" value={values.name} onChange={set("name")} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label htmlFor="email">
          email
          <input type="email" value={values.email} onChange={set("email")} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ManualForm;

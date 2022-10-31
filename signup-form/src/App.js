import { useState } from "react";
import ErrorValidationLabel from "./ErrorValidationLabel";

import "./App.css";

const textFieldState = {
  valore: "",
  valid: true,
  typeMismatch: false,
  errorMessage: "",
};

function App() {
  const [values, setValues] = useState({
    firstName: {
      ...textFieldState,
      fieldName: "First Name",
      required: true,
      requiredText: "FirstName cannot be empity",
    },
    lastName: {
      ...textFieldState,
      fieldName: "Last Name",
      required: true,
      requiredText: "LastName cannot be empity",
    },
    email: {
      ...textFieldState,
      fieldName: "Email",
      required: true,
      requiredText: "Email cannot be empity",
      formatErrorText: "Incorrect email format",
    },
    password: {
      ...textFieldState,
      fieldName: "Password",
      required: true,
      requiredText: "Password cannot be empity",
      formatErrorText: "Password must be up to 8 characters long",
    },
    allFieldsValid: false,
  });

  const updateInput = (field) => {
    return (event) => {
      setValues((prevState) => ({
        ...prevState,
        [field]: event.target.value,
      }));
    };
  };

  const reduceFormValues = (formElements) => {
    const arrElements = Array.prototype.slice.call(formElements);
    const formValues = arrElements
      .filter((elem) => elem.name.length > 0)
      .map((x) => {
        const { typeMismatch } = x.validity;
        const { name, type, value } = x;
        return {
          name,
          type,
          typeMismatch,
          value,
          valid: x.checkValidity(),
        };
      })
      .reduce((acc, currVal) => {
        const { value, valid, typeMismatch } = currVal;
        const { fieldName, requiredText, formatErrorText } =
          values[currVal.name];
        acc[currVal.name] = {
          value,
          valid,
          typeMismatch,
          fieldName,
          requiredText,
          formatErrorText,
        };
        return acc;
      }, {});
    return formValues;
  };

  const checkAllFieldsValid = (formValues) => {
    return !Object.keys(formValues)
      .map((x) => formValues[x])
      .some((field) => !field.valid);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formValues = reduceFormValues(form.elements);
    const allFieldsValid = checkAllFieldsValid(formValues);
    setValues({ ...formValues, allFieldsValid });
  };

  return (
    <>
      <div className="App">
        <main className="main">
          <section className="container">
            <section className="section-left">
              <article>
                <h2>
                  Learn to code By <br /> watching Others
                </h2>
                <p>
                  See how experienced developers solve problems in real-time.
                  <br />
                  Watching scripted tutorials is great, but understanding how.
                  <br />
                  developers think is invaluable.
                </p>
              </article>
            </section>

            <section className="section-right">
              <div className="abbonamento">
                <span>
                  <strong>Try it free 7 days</strong> then $20/mo. thereafter
                </span>
              </div>

              <form onSubmit={onSubmit} noValidate>
                <label htmlFor="firstName">
                  {!values.firstName.valid ? (
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}

                  <input
                    required
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={updateInput("firstName")}
                    className={
                      !values.firstName.valid ? "border-red" : "border-black"
                    }
                  />
                </label>
                {!values.firstName.valid ? (
                  <ErrorValidationLabel
                    txtLbl={values.firstName.requiredText}
                  />
                ) : (
                  ""
                )}

                <label htmlFor="lastName">
                  {!values.lastName.valid ? (
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}
                  <input
                    required
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className={
                      !values.lastName.valid ? "border-red" : "border-black"
                    }
                    onChange={updateInput("lastName")}
                  />
                </label>
                {!values.lastName.valid ? (
                  <ErrorValidationLabel txtLbl={values.lastName.requiredText} />
                ) : (
                  ""
                )}

                <label htmlFor="email">
                  {!values.email.valid ? (
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className={
                      !values.email.valid ? "border-red" : "border-black"
                    }
                    onChange={updateInput("email")}
                  />
                </label>
                {!values.email.valid ? (
                  <ErrorValidationLabel txtLbl={values.email.requiredText} />
                ) : (
                  ""
                )}

                <label htmlFor="password">
                  {!values.password.valid ? (
                    <svg
                      className="icon"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle fill="#FF7979" cx="12" cy="12" r="12" />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="6"
                          width="2"
                          height="9"
                          rx="1"
                        />
                        <rect
                          fill="#FFF"
                          x="11"
                          y="17"
                          width="2"
                          height="2"
                          rx="1"
                        />
                      </g>
                    </svg>
                  ) : (
                    ""
                  )}
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={
                      !values.email.valid ? "border-red" : "border-black"
                    }
                    onChange={updateInput("password")}
                  />
                </label>

                {!values.password.valid ? (
                  <ErrorValidationLabel txtLbl={values.password.requiredText} />
                ) : (
                  ""
                )}

                <button type="submit">CLAIM YOUR FREE TRIAL</button>

                <div className="footer-form">
                  <p>
                    By clicking the button, you are to our{" "}
                    <strong style={{ color: "#ff7a7a" }}>
                      Terms and Services
                    </strong>
                  </p>
                </div>
              </form>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

import "./Form.css";

import { useReducer, useState } from "react";
import {
  onInputChange,
  UPDATE_FORM,
  onFocusOut,
  validateInput,
} from "../lib/formUtils";

const initialState = {
  name: { value: "", touched: false, hasError: true, error: "" },
  lastName: { value: "", touched: false, hasError: true, error: "" },
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  isFormValid: false,
};

const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: { ...state[name], value, hasError, error, touched },
        isFormValid,
      };
    default:
      return state;
  }
};

const Form = () => {
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [showError, setShowError] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    let isFormValid = true;

    for (const name in formState) {
      const item = formState[name];
      const { value } = item;
      const { hasError, error } = validateInput(name, value);
      if (hasError) {
        isFormValid = false;
      }
      if (name) {
        dispatch({
          type: UPDATE_FORM,
          data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
          },
        });
      }
    }
    if (!isFormValid) {
      setShowError(true);
    } else {
      //...//
    }

    setTimeout(() => {
      setShowError(false);
    }, 2000);
  };

  return (
    <>
      {showError && !formState.isFormValid && (
        <div className="form-error">Please fill all the fields correctly</div>
      )}
      <form onSubmit={(e) => formSubmitHandler(e)} noValidate method="dialog">
        <label htmlFor="firstname">
          {!formState.name.value ? (
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
              </g>
            </svg>
          ) : (
            ""
          )}

          <input
            required
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            value={formState.name.value}
            onChange={(e) => {
              onInputChange("name", e.target.value, dispatch, formState);
            }}
            onBlur={(e) => {
              onFocusOut("name", e.target.value, dispatch, formState);
            }}
            className={!formState.name ? "border-red" : "border-black"}
          />
          {formState.name.touched && formState.name.hasError && (
            <div className="error">{formState.name.error}</div>
          )}
        </label>

        <label htmlFor="lastname">
          {!formState.name.value ? (
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
              </g>
            </svg>
          ) : (
            ""
          )}
          <input
            required
            type="text"
            id="lastname"
            name="lastname"
            value={formState.name.value}
            onChange={(e) => {
              onInputChange("name", e.target.value, dispatch, formState);
            }}
            onBlur={(e) => {
              onFocusOut("name", e.target.value, dispatch, formState);
            }}
            placeholder="Last Name"
            className={!formState.name ? "border-red" : "border-black"}
          />
          {formState.name.touched && formState.name.hasError && (
            <div className="error">{formState.name.error}</div>
          )}
        </label>

        <label htmlFor="email">
          {!formState.email.value ? (
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
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
            placeholder="Email Address"
            value={formState.email.value}
            onChange={(e) => {
              onInputChange("email", e.target.value, dispatch, formState);
            }}
            onBlur={(e) => {
              onFocusOut("email", e.target.value, dispatch, formState);
            }}
            className={!formState.name ? "border-red" : "border-black"}
          />
          {formState.email.touched && formState.email.hasError && (
            <div className="error">{formState.email.error}</div>
          )}
        </label>

        <label htmlFor="password">
          {!formState.password.value ? (
            <svg
              className="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
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
            value={formState.password.value}
            onChange={(e) => {
              onInputChange("password", e.target.value, dispatch, formState);
            }}
            onBlur={(e) => {
              onFocusOut("password", e.target.value, dispatch, formState);
            }}
            className={!formState.name ? "border-red" : "border-black"}
          />
          {formState.password.touched && formState.password.hasError && (
            <div className="error">{formState.password.error}</div>
          )}
        </label>

        <button type="submit" value="CLAIM YOUR FREE TRIAL">
          CLAIM YOUR FREE TRIAL
        </button>

        <div className="footer-form">
          <a href="#LoremIpsum">
            By clicking the button, you are to our{" "}
            <strong style={{ color: "#ff7a7a" }}>Terms and Services</strong>
          </a>
        </div>
      </form>
    </>
  );
};

export default Form;

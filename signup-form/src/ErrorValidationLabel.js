const ErrorValidationLabel = (props) => {
  return (
    <label htmlFor="" style={{ color: "red"}}>
      {props.txtLbl}
    </label>
  );
};

export default ErrorValidationLabel;

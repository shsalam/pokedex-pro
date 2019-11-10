import React from "react";

const Form = props => {
  return (
    <div>
      <form action="" onSubmit={props.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleChange}
        ></input>
      </form>
    </div>
  );
};

export default Form;

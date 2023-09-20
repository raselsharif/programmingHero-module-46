import React from "react";
import useInputValue from "../../Hooks/FormHook";

const HookForm = () => {
  const [name, changehanle] = useInputValue("hello");
  const formHandle = (e) => {
    e.preventDefault();
    console.log("clicked submit button");
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={formHandle}>
        <input value={name} onChange={changehanle} type="text" name="name" />{" "}
        <br />
        <input type="text" name="email" /> <br />
        <input type="text" name="phone" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;

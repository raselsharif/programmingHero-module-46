import { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [err, setErr] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name, phone, email);
    if (name.length < 2) {
      setErr("please type a atleast two character");
    } else {
      setErr("");
    }
  };
  const nameHandle = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const phoneHandle = (e) => {
    setPhone(e.target.value);
    console.log(e.target.value);
  };
  const emailHandle = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input onChange={nameHandle} type="text" name="name" /> <br />
        <input onChange={phoneHandle} type="text" name="email" /> <br />
        <input onChange={emailHandle} type="text" name="phone" /> <br />
        <input type="submit" value="Submit" />
      </form>
      {err && <p>{err}</p>}
    </div>
  );
};

export default StateFulForm;

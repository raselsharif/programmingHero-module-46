const SimpleForm = () => {
  // form handler function
  const handleForm = (e) => {
    e.preventDefault();

    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("Submited");
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name" /> <br />
        <input type="text" name="email" /> <br />
        <input type="text" name="phone" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;

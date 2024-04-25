import { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    // console.log(firstName);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    // console.log(lastName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChangeFirstName}
          required
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChangeLastName}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p>
          Full Name : {firstName.trim()} {lastName.trim()}
        </p>
      )}
    </>
  );
};

export default DisplayName;

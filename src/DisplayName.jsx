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
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleChangeFirstName}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChangeLastName}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        {isSubmitted && (firstName.trim() || lastName.trim()) && (
          <>
            Full Name: {firstName} {lastName}
          </>
        )}
      </div>
    </>
  );
};

export default DisplayName;

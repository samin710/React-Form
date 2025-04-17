import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const handlePassOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("Password must be 6 characters or longer!!!");
    }
    else{
      setError("")
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [error, setError] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input
          type="text"
          required
          placeholder="Password"
          defaultValue={password}
          onChange={handlePassOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p><small style={{color:"red"}}>{error}</small></p>
    </div>
  );
};

export default ControlledField;

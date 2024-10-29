import { useRef} from "react";

import { useNavigate } from "react-router-dom";

import APIURL from "../helpers/environment.js";

const Signup = ({updateToken}) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = APIURL + "/user/signup";

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    let bodyObj = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    });

    const requestOptions = {
      headers,
      body: bodyObj,
      method: "POST",
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if(data.token){
        updateToken(data.token);
        navigate("/movie")
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>first name</label>
        <input ref={firstNameRef} />
        <label>last name</label>
        <input ref={lastNameRef} />
        <label>email</label>
        <input ref={emailRef} />
        <label>password</label>
        <input ref={passwordRef} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;

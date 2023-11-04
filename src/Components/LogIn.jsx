import axios  from "axios";
import React from "react";
function LogIn() {
  const [state, setState] = React.useState({
    gmail: "",
    password: ""
  });
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();

    const { gmail, password } = state;
try{

  axios.post("https://hospital.somee.com/api/loginemployee", state)
    .then((res) => {
      if(res.data.id>0){
        localStorage.setItem('idemployee0000', res.data.id);
        location.href = "/";
      }

    })
    .catch((err) => {
      console.log(err);
    });
}catch(err){
  console.err(err)
}
    for (const key in state) {
      setState({
        ...state,
        [key]: ""
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="text-black">Sign in</h1>
     
        <span className="text-black">or use your account</span>
        <input
        className="text-black"
          type="email"
          placeholder="Email"
          name="gmail"
          value={state.email}
          onChange={handleChange}
        />
        <input
        className="text-black"
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LogIn;

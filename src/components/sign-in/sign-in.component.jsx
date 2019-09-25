import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CostumBtton from "../custom-buton/custom-button.component";

import {auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({email: "", password: ""});
     } catch(error){
      console.log(error)
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I awredy have an accout</h2>
        <span> Sign in with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="passward"
            required
          />
          <div className="buttons">
            <CostumBtton type="submit"> Sign In</CostumBtton>
            <CostumBtton onClick={signInWithGoogle} isGoogleSignIn> Sign In With GOOGLE</CostumBtton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

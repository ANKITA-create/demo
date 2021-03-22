import React, { Component } from 'react';
import { auth,createUserDocument } from '../firebase';
import  './SignupElements.css';

class Singup extends Component {
  state = { flatid: '', email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, flatid } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, { flatid });
    } catch (error) {
      console.log('error', error);
    }

    this.setState({ flatid: '', email: '', password: '' });
  };

  render() {
    const { flatid, email, password } = this.state;
    return (
      <div>
        <form className="signup-login" onSubmit={this.handleSubmit}>
          <h2>Signup</h2>

          <input
            type="flatid"
            name="flatid"
            value={flatid}
            onChange={this.handleChange}
            placeholder="Flatid"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Signup</button>
          <a href="/residents">Sign here</a>

        </form>
      </div>
    );
  }
}

export default Singup;

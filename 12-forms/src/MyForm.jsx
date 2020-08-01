/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
      },
      submittingState: 'filingForm',
    };
  }

  handleInput = (e) => {
    const { target, target: { name } } = e;
    const value = target.name === 'acceptRules' ? target.checked : target.value;

    this.setState(({ form }) => ({
      form: { ...form, [name]: value },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submittingState: 'showingFormData',
    });
  };

  handleBack = (e) => {
    e.preventDefault();
    this.setState({
      submittingState: 'filingForm',
    });
  };

  renderRow = (key) => {
    const { form } = this.state;
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{form[key].toString()}</td>
      </tr>
    );
  };

  renderResult = () => {
    const { form } = this.state;
    const keys = Object.keys(form).sort();

    return (
      <div>
        <button onClick={this.handleBack} type="button">Back</button>
        <table className="table">
          <tbody>
            {keys.map(this.renderRow)}
          </tbody>
        </table>
      </div>
    );
  };

  renderForm = () => {
    const {
      form: {
        email,
        password,
        address,
        city,
        country,
        acceptRules,
      },
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input onChange={this.handleInput} value={email} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input onChange={this.handleInput} value={password} type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea onChange={this.handleInput} value={address} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input onChange={this.handleInput} value={city} type="text" className="form-control" name="city" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleInput} value={country} id="inputCountry" name="country" className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input onChange={this.handleInput} checked={acceptRules} id="rules" type="checkbox" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  };

  render() {
    const { submittingState } = this.state;

    switch (submittingState) {
      case 'filingForm':
        return this.renderForm();

      case 'showingFormData':
        return this.renderResult();

      default:
        throw new Error(`Unknown submittingState: ${submittingState}`);
    }
  }
}
// END



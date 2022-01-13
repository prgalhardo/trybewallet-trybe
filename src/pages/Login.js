import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { personalValueInfos } from '../store/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loginEmail: '',
      loginPassword: '',
      loginButtonDisabled: true,
    };

    this.buttonValidate = this.buttonValidate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  buttonValidate() {
    const {
      loginEmail,
      loginPassword,
    } = this.state;
    const minimumCharacters = 6;

    if (loginEmail.includes('@') && loginEmail.includes('.com')
      && loginPassword.length >= minimumCharacters) {
      this.setState({ loginButtonDisabled: false });
    } else {
      this.setState({ loginButtonDisabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => { this.buttonValidate(); });
  }

  submitForm() {
    const {
      props: { history, dispatchSetValue },
      state: { loginEmail },
    } = this;
    dispatchSetValue(loginEmail);
    history.push('/carteira');
  }

  render() {
    const {
      state: { loginEmail, loginPassword, loginButtonDisabled },
      handleChange,
      submitForm,
    } = this;

    return (
      <div>
        <form>
          <label htmlFor="login-email-input">
            <input
              data-testid="email-input"
              type="text"
              name="loginEmail"
              id="login-email-input"
              placeholder="Insira o seu e-mail"
              value={ loginEmail }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="login-password-input">
            <input
              data-testid="password-input"
              type="password"
              name="loginPassword"
              id="login-password-input"
              placeholder="Insira a sua senha"
              value={ loginPassword }
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ loginButtonDisabled }
            name="loginButtonDisabled"
            id="login-submit-button"
            onClick={ submitForm }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (userInfos) => dispatch(personalValueInfos(userInfos)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

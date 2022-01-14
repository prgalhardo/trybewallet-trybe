import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          Usuário:
          { userEmail }
        </span>
        <br />
        <span data-testid="total-field">
          Total de Despesas:
          0
        </span>
        <br />
        <span data-testid="header-currency-field">
          Moeda atual:
          BRL
        </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  userExpenses: state.wallet.expenses,
  userCurrencies: state.wallet.currencies,
}
);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.sumOfExpenses = this.sumOfExpenses.bind(this);
  }

  sumOfExpenses() {
    const { userExpenses } = this.props;
    const totalValue = userExpenses.reduce((acc, crr) => {
      acc += crr.value * crr.exchangeRates[crr.currency].ask;
      return acc;
    }, 0).toFixed(2);
    return totalValue;
  }

  render() {
    const {
      props: { userEmail },
      sumOfExpenses,
    } = this;
    return (
      <div>
        <span data-testid="email-field">
          Usuário:
          { userEmail }
        </span>
        <br />
        <span data-testid="total-field">
          Total de Despesas:
          { sumOfExpenses() }
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
  userExpenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, null)(Header);

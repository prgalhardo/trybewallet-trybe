import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currentCurrency, getCurrentCurrency } from '../actions';
import Table from './Table';

// Agradecimento à Eduardo Miyazaki e João Spinelli com os requisitos 4 e 5.

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '`Alimentação`',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatchCurrentCurrencies } = this.props;
    dispatchCurrentCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const {
      props: { dispatchSetExpenses, userExpenses },
    } = this;
    const id = userExpenses.length;
    const expenseObj = { id, ...this.state };
    dispatchSetExpenses(expenseObj);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const {
      state: {
        value,
        description,
        currency,
        method,
        tag,
      },
      props: {
        getCurrentCurrencies,
      },
      handleChange,
      handleClick,
    } = this;
    return (
      <div>
        <form>
          <input
            data-testid="value-input"
            type="number"
            name="value"
            id="value-input"
            placeholder="Valor total"
            value={ value }
            onChange={ handleChange }
          />
          <input
            data-testid="description-input"
            type="text"
            name="description"
            id="description-input"
            placeholder="Descrição"
            value={ description }
            onChange={ handleChange }
          />
          <label htmlFor="currency-input">
            Moeda
            <select
              data-testid="currency-input"
              type="select"
              name="currency"
              id="currency-input"
              value={ currency }
              onChange={ handleChange }
            >
              { getCurrentCurrencies.map((coin, index) => (
                <option
                  value={ coin }
                  key={ index }
                  data-testid={ coin }
                >
                  { coin }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            Forma de Pagamento
            <select
              data-testid="method-input"
              type="select"
              name="method"
              id="method-input"
              value={ method }
              onChange={ handleChange }
            >
              <option>Dinheiro</option>
              <option>Cartão de débito</option>
              <option>Cartão de crédito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Despesa
            <select
              data-testid="tag-input"
              type="select"
              name="tag"
              id="tag-input"
              value={ tag }
              onChange={ handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ handleClick }
          >
            Adicionar despesa
          </button>
        </form>
        <Table />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
  getCurrentCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetExpenses: (expenses) => dispatch((currentCurrency(expenses))),
  dispatchCurrentCurrencies: () => dispatch((getCurrentCurrency())),
});

ExpenseForm.propTypes = {
  userExpenses: PropTypes.arrayOf.isRequired,
  dispatchSetExpenses: PropTypes.func.isRequired,
  dispatchCurrentCurrencies: PropTypes.arrayOf.isRequired,
  getCurrentCurrencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

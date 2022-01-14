import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
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
        userCurrencies,
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
            <select
              data-testid="currency-input"
              type="select"
              name="currency"
              id="currency-input"
              placeholder="Moeda"
              value={ currency }
              onChange={ handleChange }
            >
              { userCurrencies.map((coin, index) => (
                <option
                  value={ coin }
                  key={ index }
                >
                  { coin }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="method-input">
            <select
              data-testid="method-input"
              type="select"
              name="method"
              id="method-input"
              placeholder="Método de Pagamento"
              value={ method }
              onChange={ handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            <select
              data-testid="tag-input"
              type="select"
              name="tag"
              id="tag-input"
              placeholder="Categoria"
              value={ tag }
              onChange={ handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
  userCurrencies: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  userCurrencies: PropTypes.arrayOf.isRequired,
};
export default connect(mapStateToProps, null)(ExpenseForm);

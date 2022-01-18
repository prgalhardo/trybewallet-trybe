import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { userExpenses } = this.props;
    return (
    // Referência tabela: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { userExpenses.map((inf, index) => (
            <tr key={ index }>
              <td>{ inf.description }</td>
              <td>{ inf.tag }</td>
              <td>{ inf.method }</td>
              <td>{ inf.value }</td>
              <td>{ inf.exchangeRates[inf.currency].name }</td>
              <td>{ Number(inf.exchangeRates[inf.currency].ask).toFixed(2) }</td>
              <td>
                {(Number(inf.exchangeRates[inf.currency].ask) * inf.value).toFixed(2)}
              </td>
              <td>Real</td>
            </tr>))}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  userExpenses: state.wallet.expenses,
});

Table.propTypes = {
  userExpenses: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps, null)(Table);

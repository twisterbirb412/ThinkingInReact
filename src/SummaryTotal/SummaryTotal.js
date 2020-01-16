import React from 'react';

export default class SummaryTotal extends React.Component {
    render () {
        return (
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
            </div>
          </div>
        )
    }
}
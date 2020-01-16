import React from 'react';

export default class SummaryOption extends React.Component {
    render () {
        const {featureHash, feature} = this.props;
        const selectedOption = this. props.selectedOption;

        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        )
    }
}
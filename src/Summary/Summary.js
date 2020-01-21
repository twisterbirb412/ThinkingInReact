import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

export default class Summary extends React.Component {
    render () {
        const {selected, USCurrencyFormat, total }= this.props;

        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];
      
            return (
                <SummaryOption 
                    featureHash = {featureHash}
                    selectedOption ={selectedOption}
                    feature={this.props.feature}
                    USCurrencyFormat={USCurrencyFormat}/>
            );
          });

        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <SummaryTotal 
              USCurrencyFormat = {USCurrencyFormat}
              total = {total}/>
            </section>
        )

    };
}
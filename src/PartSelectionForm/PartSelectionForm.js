import React from 'react';
import Feature from '../Feature/Feature';

export default class PartSelectionForm extends React.Component {

    render() {
        const {selected, updateFeature, USCurrencyFormat} =this.props;

        console.log({USCurrencyFormat});

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;


        
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <Feature 
                    features = {this.props.features}
                    feature = {feature}
                    selected = {selected}
                    updateFeature = {updateFeature}
                    USCurrencyFormat = {USCurrencyFormat}/>
                </fieldset>

            );
        });

        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
            </form>
        )

    }
}
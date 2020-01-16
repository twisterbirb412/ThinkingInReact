import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

export default class PartSelectionForm extends React.Component {

    render() {
        const {selected, updateFeature, USCurrencyFormat} =this.props;

        console.log({USCurrencyFormat});

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));

                return (
                    <FeatureItem 
                        itemHash = {itemHash}
                        item={item}
                        feature={feature}
                        updateFeature = {updateFeature}
                        selected = {selected}
                        USCurrencyFormat={USCurrencyFormat}/>
                )
            });
        
            return (
                <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
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
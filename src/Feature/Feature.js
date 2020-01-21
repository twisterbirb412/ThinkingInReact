import React from 'react';
import './Feature.css';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

export default class Feature extends React.Component {

    render() {
        const {features, feature, selected, updateFeature, USCurrencyFormat } = this.props;

        //Is this where I need to break for the feature component??
        const options = features[feature].map(item => {
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
            <div class="Feature">
                {options}
            </div>
        )
    }
}
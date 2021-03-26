import React from 'react';
import RateFormElement from "./RateFormElement";
import {connect, useSelector} from "react-redux";

const RateFormList = () => {
    const rates = useSelector(store => store.rates);
    const ratesElements = rates.map(rate => <RateFormElement key={rate.id} {...rate}/>);
    return (
        <ul>
            {ratesElements}
        </ul>
    );
}

export default RateFormList;
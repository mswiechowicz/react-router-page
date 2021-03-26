import React from 'react';
import {Provider} from "react-redux";
import store from "../redux/store/store";
import RateForm from "../components/RateForm";
import RateFormList from "../components/RateFormList";

const ContactPage = () => {
    return (
        <Provider store={store}>
            Miał być kontakt, ale jest ocena:
            <RateForm />
            <h4>List:</h4>
            <RateFormList />
        </Provider>
    );
}

export default ContactPage;
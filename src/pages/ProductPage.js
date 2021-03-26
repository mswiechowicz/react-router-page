import React, {useCallback, useMemo, useState} from 'react';

const CounterButton = ({callback}) => {
    console.log('render');
    return (
        <button onClick={callback}>+1</button>
    )
}

const ProductPage = () => {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    //Dałem wcześniej też te useCallback do tej funkcji increaseFirstCounter, ale tylko useMemo na komponencie dało, że nie wywołuje się jeszcze raz
    // chyba tego jeszcze nie kumam xd
    const increaseFirstCounter = () => setFirstCounter(prevValue=>prevValue+1);
    const increaseSecondCounter = () => setSecondCounter(prevValue=>prevValue+1);

    const firstCounterComponent = useMemo(() => <CounterButton callback={increaseFirstCounter} />, []);

    return (
        <div>
            Strona produktu
            <p>Licznik1: {firstCounter} {firstCounterComponent}</p>
            <p>Licznik2: {secondCounter} <button onClick={increaseSecondCounter}>+1</button></p>
        </div>
    );
}

export default ProductPage;
import React from 'react';
import StoreProviderMobx from "../mobx/stores/StoreProviderMobx";

const MobXPage = () => {
    return (
        <StoreProviderMobx>
            <div style={{color: "orangered"}}>
                MobX
            </div>
        </StoreProviderMobx>
    );
};

export default MobXPage;
import React, { useState } from 'react';

import OrderContext, { defaultState } from './OrderState';

export function OrderStateProvider(props) {
    const [orders, addOrder] = useState(defaultState);

    // Assign React state and constants to context object
    const orderStateContext = {
        orders,
        addOrder
    };

    return (
        <OrderContext.Provider value={orderStateContext}>
            {props.children}
        </OrderContext.Provider>
    );
}
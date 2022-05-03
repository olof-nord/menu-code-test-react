import React, { useState } from 'react';

import OrderContext, { defaultState } from './OrderState';

export function OrderStateProvider(props) {
    const [orders, addOrder] = useState(defaultState);

    const countOrders = (person) => {
        const filteredOrders = orders.filter((order) =>
            order.person === person
        );
        return filteredOrders.length;
    }

    // Assign React state and constants to context object
    const orderStateContext = {
        orders,
        addOrder,
        countOrders
    };

    return (
        <OrderContext.Provider value={orderStateContext}>
            {props.children}
        </OrderContext.Provider>
    );
}
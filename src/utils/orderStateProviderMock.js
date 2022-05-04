import * as React from 'react';

import OrderContext, { defaultState } from '../components/OrderState/OrderState';

export function OrderStateProviderMock({ children, value }) {
    let contextMock = defaultState;

    if (value) {
        contextMock = value;
    }

    return (
        <OrderContext.Provider value={contextMock}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderStateProviderMock;

import React from 'react';

export const defaultState = {
    1: new Set([]),
    2: new Set([]),
};

const OrderContext = React.createContext(defaultState);
OrderContext.displayName = 'Order State';

export default OrderContext;
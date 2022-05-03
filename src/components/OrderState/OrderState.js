import React from 'react';

export const defaultState = [];

const OrderContext = React.createContext(defaultState);
OrderContext.displayName = 'Order State';

export default OrderContext;
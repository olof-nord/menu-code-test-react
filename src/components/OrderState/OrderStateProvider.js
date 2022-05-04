import React, { useState } from 'react';

import OrderContext, { defaultState } from './OrderState';

export function OrderStateProvider(props) {
    const [orders, updateOrders] = useState(defaultState);

    const countOrders = (personId) => {
        return orders[personId].size;
    };

    const getOrders = (personId) => {
        return Array.from(orders[personId]);
    };

    const getBill = (personId) => {
        let bill = 0;
        orders[personId].forEach(order => {
            bill += order.price
        });

        return bill;
    };

    const getTotal = () => {
        return getBill(1) + getBill(2);
    };

    const isAlreadyOrdered = (course, personId) => {
        return orders[personId].has(course);
    };

    const addOrder = ({ course, personId }) => {
        // Each diner cannot have more than one of the same course.
        if (isAlreadyOrdered(course, personId)) {
            return false;
        }

        updateOrders(({ 1: menuOne, 2: menuTwo }) => {
            if (personId === 1) {
                menuOne.add(course);
            } else {
                menuTwo.add(course);
            }

            return {
                1: menuOne,
                2: menuTwo
            }
        });

        return true;
    };

    const removeOrder = ({ course, personId }) => {
        updateOrders(({ 1: menuOne, 2: menuTwo }) => {
            if (personId === 1) {
                menuOne.delete(course);
            } else {
                menuTwo.delete(course);
            }

            return {
                1: menuOne,
                2: menuTwo,
            }
        });

    }

    const orderStateContext = {
        addOrder,
        getOrders,
        removeOrder,
        countOrders,
        isAlreadyOrdered,
        getBill,
        getTotal
    };

    return (
        <OrderContext.Provider value={orderStateContext}>
            {props.children}
        </OrderContext.Provider>
    );
}
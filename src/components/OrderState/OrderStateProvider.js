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
            bill += order.price;
        });

        return bill;
    };

    const getTotal = () => {
        return getBill(1) + getBill(2);
    };

    const isAlreadyOrdered = (course, personId) => {
        return orders[personId].has(course);
    };

    const verifyOrder = (mains, personId) => {
        const issues = [];

        // Each person must have at least two courses
        if (countOrders(personId) < 2) {
            issues.push(`Menu ${personId} needs at least two courses!`);
        }

        // Each person must have at least one main course
        let mainsCount = 0;
        getOrders(personId).forEach(order => {
            mains.forEach(main => {
                if (order.name === main.name) {
                    mainsCount++;
                }
            });
        });

        if (mainsCount < 1) {
            issues.push(`Menu ${personId} needs at least one main course!`);
        }

        // Pierre the snobby waiter will not let you have a prawn cocktail and salmon fillet in the same meal.
        const prawnCocktail = getOrders(personId).find(order => order.name === 'Prawn cocktail');
        const salmonFillet = getOrders(personId).find(order => order.name === 'Salmon fillet');

        if (prawnCocktail && salmonFillet) {
            issues.push(`Menu ${personId} cannot contain both a prawn cocktail and a salmon fillet!`);
        }

        return issues;
    };

    const verifyOrders = (mains) => {
        const totalIssues = [...verifyOrder(mains, 1), ...verifyOrder(mains, 2)];

        // There is only one piece of cheesecake left.
        const menuOneCheeseCake = getOrders(1).find(order => order.name === 'Cheesecake');
        const menuTwoCheesecake = getOrders(2).find(order => order.name === 'Cheesecake');

        if (menuOneCheeseCake && menuTwoCheesecake) {
            totalIssues.push(`There is only one piece of cheesecake left!`);
        }

        return totalIssues;
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
            };
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
                2: menuTwo
            };
        });

    };

    const orderStateContext = {
        addOrder,
        getOrders,
        removeOrder,
        countOrders,
        isAlreadyOrdered,
        getBill,
        getTotal,
        verifyOrder,
        verifyOrders
    };

    return (
        <OrderContext.Provider value={orderStateContext}>
            {props.children}
        </OrderContext.Provider>
    );
}
import { graphql } from 'msw';

import menu from '../server/static/menu-data.json';

export const handlers = [

    graphql.query('Menu', (req, res, ctx) => {
        const response = {
            menu
        }

        return res(
            ctx.data(response)
        );
    }),

    graphql.query('Mains', (req, res, ctx) => {
        const response = {
            menu: {
                mains: menu.mains
            },
        }

        return res(
            ctx.data(response)
        );
    })

];

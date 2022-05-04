import { graphql } from 'msw';

import menu from '../server/static/menu-data.json';

export const handlers = [

    graphql.query('Menu', (req, res, ctx) => {
        const response = {
            data: {
                menu
            },
        }

        return res(
            ctx.data(response)
        );
    }),

    graphql.query('Mains', (req, res, ctx) => {
        const response = {
            data: {
                menu: {
                    mains: menu.mains
                }
            },
        }

        return res(
            ctx.data(response)
        );
    })

];

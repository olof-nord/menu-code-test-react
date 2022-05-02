import { graphql } from 'msw';

import menu from '../server/static/menu-data.json';

export const handlers = [

    graphql.operation((req, res, ctx) => {
        const response = {
            data: {
                menu
            },
        }

        return res(
            ctx.data(response)
        );
    })

];

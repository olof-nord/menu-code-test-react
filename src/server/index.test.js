const supertest = require('supertest');
const app = require('./server');

describe('GraphQL server', () => {

    const request = supertest(app);

    test('should provide starters data', async () => {
        const expected = {
            'data': {
                'menu': {
                    'starters': [
                        { 'id': '1', 'name': 'Soup', 'price': 3 },
                        { 'id': '2', 'name': 'Pâté', 'price': 5 },
                        { 'id': '3', 'name': 'Bruschetta', 'price': 4.5 },
                        { 'id': '4', 'name': 'Prawn cocktail', 'price': 6 }
                    ]
                }
            }
        };

        const result = await request
            .post('/graphql')
            .send({ query: '{ menu { starters { id name price } } }' });

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(expected);
    });

    test('should provide mains data', async () => {
        const expected = {
            'data': {
                'menu': {
                    'mains': [
                        { 'id': '5', 'name': 'Steak', 'price': 18 },
                        { 'id': '6', 'name': 'Meatballs', 'price': 11.5 },
                        { 'id': '7', 'name': 'Salmon fillet', 'price': 14 },
                        { 'id': '8', 'name': 'Vegetarian lasagna', 'price': 12 }
                    ]
                }
            }
        };

        const result = await request
            .post('/graphql')
            .send({ query: '{ menu { mains { id name price } } }' });

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(expected);
    });

    test('should provide desserts data', async () => {
        const expected = {
            'data': {
                'menu': {
                    'desserts': [
                        { 'id': '9', 'name': 'Sticky toffee', 'price': 18 },
                        { 'id': '10', 'name': 'Tiramisu', 'price': 4.5 },
                        { 'id': '11', 'name': 'Cheesecake', 'price': 4 },
                        { 'id': '12', 'name': 'Ice cream', 'price': 3.5 }
                    ]
                }
            }
        };

        const result = await request
            .post('/graphql')
            .send({ query: '{ menu { desserts { id name price } } }' });

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(expected);
    });
});
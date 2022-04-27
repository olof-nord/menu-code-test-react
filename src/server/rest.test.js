const supertest = require('supertest');

const app = require('./server');
const menu = require('./static/menu-data.json');

describe('REST server', () => {

    const request = supertest(app);

    test('should provide starters, mains and desserts data', async () => {
        const result = await request
            .get('/api/v1/menu');

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(menu);
    });
});
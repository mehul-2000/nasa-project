const request = require('supertest')
const app = require('../../app.js')
describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app).get('/launches');
        expect(response.statusCode).toBe(200);
    }, 30000);
});

describe('Test POST /launches', () => {
    test('It should respond with 200 success', () => {

    });


    test('It should catch missing launch details.', () => {

    });

    test('It should catch invalid dates', () => {

    })
})
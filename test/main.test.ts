import request from 'supertest';
import app from '../src/main';

describe('Test the root path', () => {
    it('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('It should response Object', async () => {
        const response = await request(app).get('/');
        expect(response.body).toBeInstanceOf(Object);
    });

    it('Object should be equal { hello: world }', async () => {
        const response = await request(app).get('/');
        expect(response.body.hello).toBe('world');
    });
});
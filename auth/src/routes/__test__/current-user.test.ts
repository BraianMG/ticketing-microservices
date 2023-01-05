import request from "supertest";
import { app } from "../../app";

it('reponds with details about the current user', async () => {
  const autResponse = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456'
    })
    .expect(201);

  const cookie = autResponse.get('Set-Cookie');

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
  expect(response.body.currentUser.id).toBeDefined();
});
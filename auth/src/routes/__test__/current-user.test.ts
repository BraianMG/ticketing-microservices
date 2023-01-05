import request from "supertest";
import { app } from "../../app";

it('reponds with details about the current user', async () => {
  const cookie = await global.signupAndGetCookie();

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toEqual('test@test.com');
  expect(response.body.currentUser.id).toBeDefined();
});

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});

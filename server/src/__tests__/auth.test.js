import { register } from "../controllers/auth.controller.js";
import supertest from "supertest";
import request from "supertest";
import app from "../app.js";
import * as AuthService from "../services/auth.service.js";

const userPayload = {
  username: "username",
  password: "password",
};

describe("/register", () => {

  
  
  describe("given the username and password are valid", () => {
    it("should return 201 status code", async () => {
      const getByUsernameMock = jest
        .spyOn(AuthService, "getByUsername")
        .mockReturnValueOnce(null);

      const createUserMock = jest
        .spyOn(AuthService, "createUser")
        .mockResolvedValue(undefined);

      const { statusCode, body } = await supertest(app)
        .post("/api/register")
        .send(userPayload);

      expect(statusCode).toBe(201);
      expect(getByUsernameMock).toHaveBeenCalledWith(userPayload.username);
      expect(createUserMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('')



});

// describe("/login", () => {
//   describe("given username and password are valid", () => {
//     // it('should respond with a 200 status code', () => {
//     // })
//     // test('should respond with a 200 status code', async () => {
//     //   const response = await request(app).post('/api/login').send({
//     //     username: "username",
//     //     password: "password"
//     //   })
//     //   expect(response.statusCode).toBe(200)
//     // })
//   });

//   // describe("when the username or password is missing", () => {
//   //   test('should respond with a status code of 400', async () => {
//   //     // no username & password
//   //     let res = await request(app).post('/api/login').send({})
//   //     expect(res.statusCode).toBe(400)

//   //     res = await request(app).post('/api/login').send({
//   //       username: "username"
//   //     })
//   //     expect(res.statusCode).toBe(400)

//   //      res = await request(app).post('/api/login').send({
//   //       password: "password"
//   //      })
//   //     expect(res.statusCode).toBe(400)
//   //   })
//   // });
// });

/**
 * registration
 *  - username and password get validation
 *  - verify that the passwords must match
 *  - verify that the handler handles any errors
 *
 * login
 *  - given the username and password are valid
 *    - status 200
 *    - should return accessToken, refreshToken cookies
 */

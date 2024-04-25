import { register } from "../../controllers/auth.controller";

const request = {
    body: {
        email: 'fake_email',
        password: 'fake_password'
    }
}

it("should sent a status code of 409 when user exists", async () => {
    await register(request)
});

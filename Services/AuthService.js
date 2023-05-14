import chalk from "chalk";
import UserRepo from "../Repositories/UserRepo";
import Response from '../dto/Response';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
    constructor(userPayload) {
        this.userPayload = userPayload;
        this.userRepo = new UserRepo();
    }

    login = async () => {
        try {
            const userRepoResponse = await this.userRepo.getDocument({ email: this.userPayload.email });
            if (!userRepoResponse.success) {
                throw userRepoResponse.err;
            }
            const { data: user } = userRepoResponse;
            if (!user) {
                throw new Error("UserNotFoundException");
            }
            const isPasswordValid = bcrypt.compareSync(this.userPayload.password, user.password);
            if (!isPasswordValid) {
                throw new Error("IncorrectPasswordException");
            }

            return new Response().success(this.#getJWTToken(user));
        }
        catch (err) {
            console.log(chalk.red(err));
            if (err.message === "UserNotFoundException") {
                return new Response().error(11);
            }
            if (err.message === "IncorrectPasswordException") {
                return new Response().error(12);
            }
            return new Response().error(500);
        }
    }

    signup = async () => {
        try {
            if (!this.#validatePrehashedPassword(this.userPayload.password)) {
                throw "InvalidPasswordException";
            }
            const hashedPassword = bcrypt.hashSync(this.userPayload.password, 10);
            this.userPayload.password = hashedPassword;
            const savedUserRepoResponse = await this.userRepo.insertDocument(this.userPayload);
            if (savedUserRepoResponse.success) {
                return new Response().success(this.#getJWTToken(savedUserRepoResponse.data));
            }
            throw savedUserRepoResponse.err;
        }
        catch (err) {
            console.log(chalk.red(err));
            if (err.code === 11000) {
                return new Response().error(11001)
            }
            return new Response().errorMessage(400, err.message)
        }
    }

    #validatePrehashedPassword = (password) => {
        return password.length >= 6;
    }
    #getJWTToken = (savedUser) => {
        return jwt.sign({
            email: savedUser.email,
            id: savedUser._id
        }, process.env.JWT_SECRET);
    }
}

export default AuthService;
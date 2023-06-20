import UserRepo from "../Repositories/UserRepo";
import Response from "../dto/Response";

class UserService {
    constructor() {
        this.userRepo = new UserRepo();
    }

    getOne = async (condition) => {
        try {
            const userRepoResponse = await this.userRepo.getDocument(condition);
            if (!userRepoResponse.success) {
                throw userRepoResponse.err;
            }
            userRepoResponse.data.password = null
            return new Response().success(userRepoResponse.data);
        }
        catch (err) {
            return new Response().errorMessage(500, err)
        }
    }
    insertOne = async (body) => {
        try {
            const savedUserRepoResponse = await this.userRepo.insertDocument(body);
            if (!savedUserRepoResponse.success) {
                throw savedUserRepoResponse.err;
            }
            return new Response().success(savedUserRepoResponse.data);
        }
        catch (err) {
            return new Response().errorMessage(500, err)
        }
    }
}

export default UserService;
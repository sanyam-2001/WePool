import UserModel from "../Models/UserModel";
import RepoResponse from "../dto/RepoResponseDto";
class UserRepo {
    constructor() { }

    insertDocument = async (payload) => {
        try {
            const newUser = new UserModel(payload);
            const savedUser = await newUser.save();
            return new RepoResponse(true, null, savedUser);
        }
        catch (err) {
            return new RepoResponse(false, err, null);
        }
    }
    getOne = async (condition) => {
        try {
            const resultSet = await UserModel.findOne(condition);
            return new RepoResponse(true, null, resultSet);
        }
        catch (err) {
            return new RepoResponse(false, err, null);
        }
    }
}

export default UserRepo;
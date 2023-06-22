import TripModel from '../Models/TripModel';
import RepoResponse from "../dto/RepoResponseDto";
class TripRepo {
    constructor() { }

    getDocument = async (condition) => {
        try {
            const resultSet = await TripModel.findOne(condition);
            return new RepoResponse(true, null, resultSet);
        }
        catch (err) {
            console.log(err)
            return new RepoResponse(false, err, null);
        }
    }
    getDocuments = async (condition) => {
        try {
            const resultSet = await TripModel.find(condition);
            return new RepoResponse(true, null, resultSet);
        }
        catch (err) {
            console.log(err)
            return new RepoResponse(false, err, null);
        }
    }
    insertDocument = async (body) => {
        try {
            const newTrip = new TripModel(body);
            const savedRequest = await newTrip.save();
            return new RepoResponse(true, null, savedRequest);
        }
        catch (err) {
            console.log(err);
            return new RepoResponse(false, err, null);
        }
    }
    updateDocumentById = async (id, updatedPayload) => {
        try {
            const updatedTrip = await TripModel.findByIdAndUpdate(id, updatedPayload);
            return new RepoResponse(true, null, updatedTrip);
        }
        catch (err) {
            console.log(err);
            return new RepoResponse(false, err, null);
        }
    }

}

export default TripRepo;
import TripModel from '../Models/TripModel';
import RepoResponse from "../dto/RepoResponseDto";
class TripRepo {
    constructor() { }

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

}

export default TripRepo;
import RideRequestModel from '../Models/RideRequestModel';
import RepoResponse from "../dto/RepoResponseDto";
class RideRequestRepo {
    constructor() { }

    insertDocument = async (payload) => {
        try {
            const newRequest = new RideRequestModel(payload);
            const savedRequest = await newRequest.save();
            return new RepoResponse(true, null, savedRequest);
        }
        catch (err) {
            console.log(err);
            return new RepoResponse(false, err, null);
        }
    }
    getDocument = async (condition) => {
        try {
            const resultSet = await RideRequestModel.findOne(condition);
            return new RepoResponse(true, null, resultSet);
        }
        catch (err) {
            console.log(err)
            return new RepoResponse(false, err, null);
        }
    }
    deleteDocument = async (docId) => {
        try {
            const resultSet = await RideRequestModel.findByIdAndDelete(docId);
            return new RepoResponse(true, null, resultSet);
        } catch (err) {
            console.log(err)
            return new RepoResponse(false, err, null);
        }
    }

    getDocumentsBasedOnProximity = async (startLongitude, startLatitude, endLongitude, endLatitude, distanceKm) => {
        const aggregatedResult = await RideRequestModel.aggregate([
            {
                '$match': {
                    'startLocation.location': {
                        '$geoWithin': {
                            '$centerSphere': [
                                [
                                    startLongitude, startLatitude
                                ], distanceKm / 6378.1
                            ]
                        }
                    },
                    'endLocation.location': {
                        '$geoWithin': {
                            '$centerSphere': [
                                [
                                    endLongitude, endLatitude
                                ], distanceKm / 6378.1
                            ]
                        }
                    }
                }
            }, {
                '$addFields': {
                    'objectUserId': {
                        '$toObjectId': '$userId'
                    }
                }
            }, {
                '$lookup': {
                    'from': 'usermodels',
                    'localField': 'objectUserId',
                    'foreignField': '_id',
                    'as': 'userDetails'
                }
            }, {
                '$project': {
                    'requestBy': {
                        '$first': '$userDetails'
                    },
                    'startLocation': 1,
                    'endLocation': 1,
                    'locationPayload': 1
                }
            }, {
                '$limit': 1
            }
        ])
        return new RepoResponse(true, null, aggregatedResult);
    }
}

export default RideRequestRepo;
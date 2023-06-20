import RideRequestRepo from "../Repositories/RideRequestRepo";
import TripRepo from "../Repositories/TripRepo";
import buildConfirmationRequest from "../dto/ConfirmationRequestDto";
import Response from "../dto/Response";
import createTripObjectFromRequests from "../dto/TripCreationDto";
import { io } from '../index';
class RideService {
    constructor() {
        this.rideRequestRepo = new RideRequestRepo();
        this.tripRepo = new TripRepo();
    }
    insertTrip = async (body) => {
        try {
            const savedTrip = await this.tripRepo.insertDocument(body);
            if (!savedTrip.success) {
                throw savedTrip.err;
            }
            return new Response().success(savedTrip.data);

        } catch (err) {
            return new Response().errorMessage(500, err)
        }
    }
    insertOne = async (body) => {
        try {
            const savedRequestResponse = await this.rideRequestRepo.insertDocument(body);
            if (!savedUserRepoResponse.success) {
                throw savedUserRepoResponse.err;
            }
            return new Response().success(savedRequestResponse.data);
        }
        catch (err) {
            return new Response().errorMessage(500, err)
        }
    }
    deleteOneById = async (id) => {
        try {
            const deletedPayload = await this.rideRequestRepo.deleteDocument(id);
            return new Response().success(deletedPayload.data);
        }
        catch (err) {
            return new Response().error(500, err);
        }
    }
    handleRideRequest = async (req) => {
        const requestBodyBuilt = buildConfirmationRequest(req);
        const proximityResults = await this.getByProximity(
            requestBodyBuilt.startLocation.location.coordinates[0],
            requestBodyBuilt.startLocation.location.coordinates[1],
            requestBodyBuilt.endLocation.location.coordinates[0],
            requestBodyBuilt.endLocation.location.coordinates[1],
            requestBodyBuilt?.distanceParams || 5
        )
        if (proximityResults.data.length > 0) {
            const foundRequest = proximityResults.data[0];
            await this.deleteOneById(foundRequest._id);
            const createdTrip = await this.insertTrip(createTripObjectFromRequests(requestBodyBuilt, foundRequest));
            io.in(requestBodyBuilt.userId).emit("TRIP_FOUND", createdTrip.data);
            io.in(foundRequest.requestBy._id.toString()).emit("TRIP_FOUND", createdTrip.data);
            return new Response().success(createdTrip.data);

        }
        else await this.insertOne(requestBodyBuilt);



    }
    getByProximity = async (startLongitude, startLatitude, endLongitude, endLatitude, distanceKm) => {
        try {
            const proximityRequests = await this.rideRequestRepo.getDocumentsBasedOnProximity(startLongitude, startLatitude, endLongitude, endLatitude, distanceKm);
            if (!proximityRequests.success) {
                throw savedUserRepoResponse.err;
            }
            return proximityRequests;
        } catch (err) {
            console.log("Get By Proximity Error: ", err);
            return [];
        }
    }

}

export default RideService;
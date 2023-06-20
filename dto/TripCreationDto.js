const createTripObjectFromRequests = (currentRequest, foundRequest, status = "11") => {
    return {
        participants: [currentRequest.userId, foundRequest.requestBy._id],
        startLocations: [currentRequest.startLocation, foundRequest.startLocation],
        endLocations: [currentRequest.endLocation, foundRequest.endLocation],
        status
    }
}

export default createTripObjectFromRequests;
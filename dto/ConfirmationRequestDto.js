const buildConfirmationRequest = (req) => {
    return {
        userId: req.user.id,
        startLocation: {
            location: {
                type: "Point",
                coordinates: [req.body.startPoint.lon, req.body.startPoint.lat]
            }
        },
        endLocation: {
            location: {
                type: "Point",
                coordinates: [req.body.endPoint.lon, req.body.endPoint.lat]
            }
        },
        locationPayload: ({ startPoint: req.body.startPoint, endPoint: req.body.endPoint })
    }
}

export default buildConfirmationRequest;
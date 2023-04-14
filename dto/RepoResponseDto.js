class RepoResponse {
    constructor(success, err, data) {
        return {
            success: success,
            err: err,
            data: data
        }
    }
}

export default RepoResponse;
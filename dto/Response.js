import errorCode from '../Enums/ErrorCodes'
class Response {
    constructor() {

    }
    success = (data) => {
        return {
            success: true,
            code: 200,
            data: data,
            err: null
        }
    }

    error = (code) => {
        return {
            success: false,
            code,
            data: null,
            err: errorCode[code]
        }
    }
    errorMessage = (code, err) => {
        return {
            success: false,
            code,
            data: null,
            err: err
        }
    }
}

export default Response;
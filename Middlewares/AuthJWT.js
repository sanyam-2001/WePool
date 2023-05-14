import jwt from 'jsonwebtoken';
import Response from "../dto/Response";

const AuthJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) throw { err: "No Auth Header Present on Request!" };
        const token = authHeader.split(' ');
        if (!token[1]) throw { err: "No JWT Token Present on the Header!" };
        const status = jwt.verify(`${token[1]}`, process.env.JWT_SECRET);
        if (!status) throw { err: "Invalid JWT Token!" };
        req.user = status;
    }
    catch (err) {
        console.log("JWTAuth Err", err);
        res.json(new Response().errorMessage(401, err.err));
    }
    next();
}

export default AuthJWT;
import jwt from 'jsonwebtoken';
import User from '../User';

export let auth = (req, res, next)=>{

    const token = req.headers['x-access-token'] || req.headers['authorization'];
    
    if(!token) return res.status(401).send("Access denied. No token provided");
    console.log("token: " + token);

    try{
        const decoded = jwt.verify(token.toString(), "mykey");
        req.body.user = decoded;
        next();
    }
    catch(e){
        console.log(e);
        res.status(400).send("Invalid token");
    }
}

export let generateAuthToken = (user: User)=>{
    const token = jwt.sign({_id: user.Email}, "mykey");
    return token;
}


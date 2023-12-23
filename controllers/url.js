const shortid = require('shortid');
const URL = require('../models/url');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// user pass original url then store that url and convert into short url
module.exports.handleGenerateNewShortURL = async (req, res) => {
    try {
        const body = req.body;
        // if user url not pass then run if condition
        if(!body.url){
            return res.status(400).json({
                error: "url is required"
            })
        }
        // convert original url into short url
        const shortID = shortid();
        
       const data = await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            visitHistory: [],
        });

        return res.status(200).json({id: shortID});
    } catch (error) {
        // console.log('error in create new short url', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

// user pass short url then we redirect user to original url
module.exports.handleRedirectUser = async (req, res) => {
    try {
        // extract short url form params
        const shortId = req.params.shortId;
        // find url data and update visit History
        const entry = await URL.findOneAndUpdate({
            shortId: shortId
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                }
            }
        });
    
        return res.redirect(entry.redirectURL);
    
    } catch (error) {
        // console.log('error in redirect short url to original url', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
   
};

// Register User
module.exports.handleUserRegister = async (req, res) => {
    try{
        // check if user already exist or not
        const user = await User.findOne({password: req.body.password});
        // user not exist then create them
        if(!user){
            const person = await User.create(req.body);
    
            if(person){
                // console.log("new person created", person);
                return res.status(200).json({
                    success: true,
                    message: "user created successfully"
                })
            }
        }
        // if user exist
        return res.status(401).json({
            success: false,
            message: "user not created because already exist"
        });

    }catch(err){
        // console.log('error in resister user', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
};

// user login
module.exports.handleUserLogin = async (req, res)=>{
    try{
        // const user = await User.findOne(req.body);
        const user = await User.findOne({password: req.body.password});
        if(user){
            // const token = jwt.sign(user.json(), "secret", {expiresIn: '100000'});
            return res.status(200).json({
                success: true,
                message: "user login successfull",
                token: await jwt.sign(user.toJSON(), "secret", {expiresIn: '10000000'})
            })
        }else{
            return res.status(404).json({
                success: false,
                message: "Invalid username or password"
            });
        }
    }catch(err){
        // console.log('error in user login', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}
const UserModel = require("../Model/UserModel");
const bcryptjs = require("bcryptjs");
const { GenerateToken } = require('../Auth/Auth');
// const mail = require("../Sendmail/sendMail");

function RegisterUser(user){
    return new Promise((resolve, reject)=>{
        console.log(user);
        UserModel.findOne({email: user.email}, (err, data)=>{
            if(data){
                resolve({status: 409, message: "User with given email already exists."});
            }
            else if(!data){
                let newUser = new UserModel({
                    username: user.username,
                    email: user.email,
                    password: bcryptjs.hashSync(user.password, 10),
                });
    
                newUser.save((err)=>{
                    if(!err){
                        resolve({status:200, message: "User added successfully."});
                    }
                    else{
                        reject(err);
                    }
                });
            }
            else{
                reject(err);
            }
        });
    })
}


const LoginUser = (email, password) => {
    return  new Promise(async (resolve, reject) => {
        let user = await UserModel.findOne({email: email});

        if(!user){
            reject({status:404, message: "User not found", success: false});
        }
        if(user){
            if(!bcryptjs.compareSync(password, user.password)){
                reject({status: 402, message: "Invalid password", success: false})
            }
            else{
                const token = GenerateToken({id: user._id});
                resolve({
                    status: 200, 
                    token: token, 
                    message: "User Login successfully."
                });
            }
        }
    })
}

const LogoutUser = ()=>{
    return new Promise((resolve, reject) => {
        resolve({ message: 'clear cookie' })
    })
}

const ResetPassword = (email, password)=>{
    return new Promise(async (resolve, reject) => {
        let user = await UserModel.findOne({email: email});
        if(user){
            let newPassword = bcryptjs.hashSync(password, 10);
            await UserModel.updateOne({email: user.email}, {password: newPassword});
            resolve({message: "Password Updated Successfully", success:true });
        }else{
            reject({message: "User does not exist", success:false});
        }
    })
}

const SendMail = (email, hostname)=>{
    return new Promise(async (resolve, reject)=>{
        let user = await UserModel.findOne({email: email});
        if(!user){
            reject({message: "User not found", success: false});
        }

        if(user){
            let token = GenerateToken({id: user._id, email: user.email});
            let link = `http://${hostname}:8001/resetpassword/${user.email}/${token}`;
            
            let bool = await mail(link, user.email);

            if (bool) {
                resolve({ message: "Link has been sent to your email id", success: true })
            } else {
                reject({ message: "Link coud not be sent to your email id", success: false })
            }
        }
    })
}

function GetUser(req, res){
    UserModel.findOne({email: req.body.email}, (err, users)=>{
        if(!err){
            console.log(users)
            res.status(200).send({userData: users});
        }else{
            throw err;
        }
    })
}



module.exports = {RegisterUser, GetUser, LoginUser, LogoutUser, ResetPassword, SendMail}

















// function LoginUser(req, res){
//     UserModel.findOne({email: req.body.email}, (err, user) => {
//         if(!user){
//             res.status(401).send({status: 401, message: "User with given email does not exist. Please Register."});
//         }
//         else if(user){
//             if(bcryptjs.compareSync(req.body.password, user.password)){
//                 res.status(200).send({
//                     status: 200, 
//                     token: GenerateToken(req.session.passport), 
//                     message: "User Login successfully"});
//             }
//             else{
//                 res.status(402).send({status: 402, message: "Password Incorrect"});
//             }
//         }
//         else{
//             res.status(403).send(err);
//         }
//     });
// }
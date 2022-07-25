const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "this is y secret key for jwt";


const UserSchema = mongoose.Schema({
    // _id:{
    //     type: String,
    //     require: true
    // },
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
});


// // generating Auth token
// UserSchema.methods.generateAuthToken = async function (){
//     try {
//         let token1 = jwt.sign({_id: this._id}, SECRET_KEY);
//         this.tokens = this.tokens.concat({token: token1});
//         await this.save();
//         return token1;
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = mongoose.model('UserModel', UserSchema, "Users")
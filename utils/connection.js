const mongoose = require('mongoose');

const connection = async() =>{
    return new Promise((resolve,reject)=>{
        let url = "mongodb://127.0.0.1:27017/movie-api"
        mongoose.connect(url).then(()=>{
            console.log("connect");
            resolve();
        }).catch((err)=>{
            console.log(err);
            reject();
        })
    })
}
module.exports = connection;

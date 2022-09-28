const connection = require('../utils/connection');
const movieModel = require('./movies')


class Movies{
    constructor(){
         connection();
    }

    async getAllmovie(x){

        let {title,rating , sortedBy,limit,page} = x;

        let quries = {};
    let  sorts ={} ;
        if(title === undefined && rating === undefined){
            quries = {}
            
        }else if(title === undefined){
            quries.rating = rating
        }else if(rating === undefined){
            quries.title = {$regex : title, $options : 'i'}
         
        }else{
            quries.rating = rating
           quries.title = {$regex : title, $options : 'i'}
        }
           if(sortedBy != undefined){
              sorts[sortedBy] = 1;
           }
            page = parseInt(page);
           limit = parseInt(limit)
         
        return movieModel.find(quries).sort(sorts).skip((page-1)*limit).limit(limit);
    }

    async getOnemovie(id){
        return movieModel.findById({_id : id});
    }
    async deleteOnemovie(id){
        return movieModel.findByIdAndRemove({_id : id});
    }

    async addOnemovie(info){
        return movieModel.create(info)
    }
    async updateMovie(id,x){
        return movieModel.findByIdAndUpdate({_id : id},x);
    }
}
module.exports = Movies;
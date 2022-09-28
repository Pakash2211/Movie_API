const { Router} = require('express');
const Movies = require('../database/moviedata');

const movies1 = new Movies();

const moviesRouter = Router();

moviesRouter.get('/',async(req,res)=>{
 
    
     const movies = await movies1.getAllmovie(req.query);
    res.send(movies)
})

moviesRouter.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const movies = await movies1.getOnemovie(id);
   res.send(movies)
})



moviesRouter.post('/',async(req,res)=>{
    try {
        const data = req.body;
        await movies1.addOnemovie(data);
        res.send("added");
    } catch (error) {
        res.send(error.massage);
    }
   
})
moviesRouter.delete('/:id',async(req,res)=>{
    try {
        const{id} = req.params;
        await movies1.deleteOnemovie(id);
        res.send("delete");
    } catch (error) {
        res.send(error.massage);
    }
   
})

module.exports = moviesRouter;
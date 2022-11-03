const City = require('../models/City')

const citiesControllers = {
    returnCities:(req,res)=>{
        City.find()
        .then((response)=> res.json({response}))
    
}, 
    returnCity:(req,res)=>{
        City.findOne({_id: req.params.id})
            .then((response) =>{res.json({response})
    })  
},
    createCity:(req,res)=>{
        const {name, src, description}= req.body
        new City({name, src, description}).save()
        .then((response)=> res.json({response}))
    },
    deleteCity: async (req,res) =>{
        const id = req.params
        try{
            await City.findOneAndDelete({_id:id})
        }catch(error){
        console.log(error)
        }
        res.json({success:true})
    },
    modifyCity: async(req,res) => {
        try{
            actualizado = await City.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}

module.exports = citiesControllers 

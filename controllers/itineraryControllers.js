const Itinerary = require('../models/Itinerary')

const itineraryControllers = {
    returnItineraries:(req,res)=>{
        Itinerary.find()
        /* .populate('city') */
        .then((response)=> res.json({response}))
    }, 
    returnItinerary:(req,res)=>{
        Itinerary.findOne({_id: req.params.id})
            .then((response) =>{res.json({response})
    })  
    },
    returnItinerariesByCity: (req, res) => {
        console.log(req.params)
        Itinerary.find({city: {_id: req.params.city}})
            .populate("city")
            .then((response) => {
                res.json({response})
            })
            .catch((err) => console.log(err))
    },
    createItinerary:(req,res)=>{
        new Itinerary({...req.body}).save()
        .then((response)=> res.json({itinerary: response, success:true}))
        .catch((e) => res.json({error: e.errors.price, success:false}))
    },
    deleteItinerary: async (req,res) =>{
        const id = req.params.id
        let itineraries
        try{
            await Itinerary.findOneAndDelete({_id:id})
            itineraries = await Itinerary.find()
        }catch(error){
        console.log(error)
        }
        res.json({response: itineraries, success:true})
    },
    modifyItinerary: async(req,res) => {
        try{
            actualizado = await Itinerary.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
    }
}

module.exports = itineraryControllers 



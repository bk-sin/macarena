const Router = require ('express').Router()
const authControllers = require('../controllers/authControllers')
const citiesControllers = require('../controllers/citiesControllers')
const itineraryControllers = require('../controllers/itineraryControllers')
const activitiesControllers = require('../controllers/activitiesControlles')
const likesControllers = require('../controllers/likesControllers')
const commentControllers = require('../controllers/commentControllers2')
const validator = require('../config/validator')
const passport = require('../config/passport')
const validatorComment = require ('../config/validatorComment')

Router.route('/cities')
.get(citiesControllers.returnCities)
.post(citiesControllers.createCity)

Router.route('/city/:id')
.get(citiesControllers.returnCity)
.post(citiesControllers.createCity)
.delete(citiesControllers.deleteCity)
.put(citiesControllers.modifyCity)

Router.route('/itineraries')
.get(itineraryControllers.returnItineraries)
.post(itineraryControllers.createItinerary)

Router.route('/itineraries/:id')
.get(itineraryControllers.returnItinerary)
.post(itineraryControllers.createItinerary)
.delete(itineraryControllers.deleteItinerary)
.put(itineraryControllers.modifyItinerary)

Router.route("/itinerary/:city")
.get(itineraryControllers.returnItinerariesByCity) 

Router.route('/auth/signUp')
.post(validator, authControllers.signUp)
.get(authControllers.readUsers)

Router.route('/auth/signIn')
.post(authControllers.signIn)

Router.route('/auth')
.get(passport.authenticate('jwt', {session:false}), authControllers.chekearToken)

Router.route('/activities')
.post(activitiesControllers.postActivity)
.get(activitiesControllers.returnActivities)

Router.route('/activities/:id')
.get(activitiesControllers.returnActivity)
.put(activitiesControllers.modifyActivity)
.delete(activitiesControllers.deleteActivity)

Router.route("/activity/:itineraryId")
.get(activitiesControllers.returnActivitiesByItinerary) 

Router.route('/like')
.put(likesControllers.likes)

Router.route('/comments/:itineraryId')
.get(commentControllers.getComments)
.post(validatorComment, commentControllers.postComment) 

Router.route('/comments')
.get(commentControllers.getAllComments)
.put(passport.authenticate("jwt", {session: false}), commentControllers.editComment) 

Router.route('/comments/:commentId')
.delete(passport.authenticate("jwt", {session: false}), commentControllers.deleteComment) 



module.exports = Router
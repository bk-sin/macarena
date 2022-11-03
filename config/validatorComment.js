const joi = require('joi')

const validatorComment = (req, res, next) => {
    const schema = joi.object({
        user: joi.string(),
        itinerary:joi.string(),
        message: joi.string().min(1),
    })
    const validation = schema.validate(req.body, {abortEarly:false})
    if(validation.error) {
        return res.json({success: false, response:validation.error.details })
    }
    next()
}

module.exports = validatorComment
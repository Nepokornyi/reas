const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const FormOfferSchema = new Schema({
    estate: String,
    region: String,
    fullname: String,
    phone: String,
    email:{
        type: String,
    },
    date: {
        type: String,
        default: Date.now()
    }
});


//Model
const FormOffer = mongoose.model('FormOffer', FormOfferSchema);

module.exports = FormOffer;
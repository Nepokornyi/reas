const express = require('express');

const router = express.Router();

const FormOffer = require('../models/formOffer')

//Route
router.get('/', (req, res) =>{

    FormOffer.find({  })
        .then((data) =>{
            console.log('Data : ', data);
            res.json(data);
        })
        .catch((error) =>{
            console.log('error ', error);
        })

});

router.post('/chci-nabidku', (req, res) =>{
    const data = req.body;
    const newFormOffer = new FormOffer(data)

    newFormOffer.save((error) =>{
        if(error){
            res.status(500).json({msg: 'Sorry, internal server error'});
            return;
        }
        
        res.json({
            msg: 'Json data received'
        });
    });
});

module.exports = router;
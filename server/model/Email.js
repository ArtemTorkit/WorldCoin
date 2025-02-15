


const mongoose = require('mongoose');

const ReferalSchema = new mongoose.Schema({
    url: {
        type:String,

    }
})


const Referal = mongoose.model('Referal', ReferalSchema, 'url-referal'  );
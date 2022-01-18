const mongoose = require('mongoose');
const { Schema } = mongoose

//membuat tabel sepatu dengan schema
const sepatuSchema = new Schema({
    nama: String,
    harga: String,
    password: String
}, { timestamps: true });

//ekspor tabel sepatu
const Sepatu = mongoose.model('Sepatu', sepatuSchema)
module.exports = Sepatu
const { response } = require("express")
const { render } = require("express/lib/response")
const res = require("express/lib/response")

//import modul Sepatu dari file sepatu.js dimodels
//import tabel sepatu
const Sepatu = require("../models/sepatu")

module.exports = {
    index: function (req, res) {
        Sepatu.find(function (error, sepatu) {
            if (error) console.log(error)
            console.log(sepatu)
            res.render('pages/sepatu/index', { sepatu })
        })
    },

    //mencarii
    // index: function (req, res) {
    //     Sepatu.findOne({ harga: '20000'}, function (error, sepatu) {
    //         if (error) console.log(error)
    //         console.log(sepatu)
    //         res.render('pages/sepatu/index',{sepatu})
    //     })
    // },

    show: function (req, res) {
        const id = req.params.id

        Sepatu.findById(id, function (error, data) {
            if (error) console.log(error)
            console.log(data)
            res.render('pages/sepatu/show', { sepatu: data })


            // const data = sepatu.filter(sepatu =>{
            //     return sepatu.id == id
            // })

        })
    },

    create: function (req, res) {
        res.render('pages/sepatu/create')
    },

    tambah: function (req, res) {
        const sepatu = new Sepatu({
            nama: req.body.nama,
            harga: req.body.harga,
            password: req.body.password
        })
        sepatu.save(function (error) {
            if (error) return handleError(error);
            res.redirect('/sepatu')
        })
    },

    // tambah: function (req, res) {
    //     sepatu.push({
    //         id: req.body.id,
    //         nama: req.body.nama,
    //         harga: req.body.harga
    //     })
    //     res.redirect('/sepatu')
    // },

    update: function (req, res) { //Memperbaharui data
        const id = req.params.idsepatu;
        let isFound = false
        console.log(id)
        Sepatu.filter(proj => { //Filter adalah metode update dari javascript (agar data katalog di filter satu/satu)
            if (proj.idsepatu == id) { //Untuk pengecekan kondisi
                proj.nama = req.body.nama
                proj.harga = req.body.harga
                proj.password = req.body.password

                res.send({
                    status: true,
                    data: sepatu,
                    message: "File berhasil diperbaharui",
                    method: req.method,
                    url: req.url,
                    tanggal: new Date()
                })
                isFound = true
                return proj //return data katalog yang baru
            }
        })
        if (isFound == false) {
            res.send({
                status: false,
                message: "sepatu tidak ditemukan"
            })
        }
        res.json(sepatu) //tampilkan data katalog yang baru
    },
    baharui: function (req, res) {
        const _id = req.body._id
        const id = req.body.id
        const nama = req.body.nama
        const harga = req.body.harga
        const password = req.body.password
        const filter = { _id: _id };
        const update = {
            id: id,
            nama: nama,
            harga: harga,
            password: password
        };
        Sepatu.updateOne(filter, update, function (err) {
            console.log(nama, harga, password)
            res.redirect('/sepatu')
        });


    },
    renderUpdate: function (req, res) {
        const id = req.params._id
        Sepatu.findById(id, function (error, data) {
            if (error) console.log(error)
            console.log(data)
            res.render('pages/sepatu/update', { sepatu: data })
        })
    },

    hapus: function (req, res) {
        const id = req.params.id
        Sepatu.deleteOne({ _id: id }, function (err) {
            if (err) return console.log(err);
            res.redirect('/sepatu')
        });
    },
    delete: function (req, res) { //Menghapus data
        const id = req.params.idsepatu;
        let isFound = false
        sepatu.filter(proj => {
            if (proj.idsepatu == id) {
                const index = sepatu.indexOf(pro)
                sepatu.splice(index, 1)
                res.send({
                    status: true,
                    data: sepatu,
                    message: "File berhasil dihapus",
                    method: req.method,
                    url: req.url,
                    tanggal: new Date()
                })
                isFound = true
            }
        })
        if (isFound == false) {
            res.json({
                status: false,
                message: "File tidak ditemukan"
            })
        }
        res.json(sepatu)
    }
}
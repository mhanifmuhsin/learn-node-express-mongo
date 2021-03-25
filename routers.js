const client = require('./connection')
const express = require('express');
const routers = express.Router();
const ObjectId = require('mongodb').ObjectId

// if (client.isConnected()){
//     const db = client.db("sekolah")
// } else{
//     console.log('koneksi database gagal')
// }

//list siswa
routers.get('/siswa', async (req, res) => {
    if (client.isConnected()) {
        const db = client.db('sekolah')
        // kode untuk menampilkan list products res.send('menampilkan list products')
        const siswa = await db.collection('siswa').find().toArray()
        res.send({
            status: 'success',
            message: 'list siswa',
            data: siswa
        })
    } else {
        res.send({
            status: 'error',
            message: 'koneksi database gagal'
        })
    }
})

// siswa berdasarkan id
routers.get('/siswa/:id', async (req, res) => {
    if (client.isConnected()) {
        const db = client.db('sekolah')
        // kode untuk menampilkan list products res.send('menampilkan list products')
        const siswa = await db.collection('siswa').findOne({
            _id: ObjectId(req.params.id)})
        res.send({
            status: 'success',
            message: 'single siswa',
            data: siswa
        })
    } else {
        res.send({
            status: 'error',
            message: 'koneksi database gagal'
        })
    }
})

module.exports = routers
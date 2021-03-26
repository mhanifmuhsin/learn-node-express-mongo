const client = require('./connection')
const express = require('express');
const routers = express.Router();
const ObjectId = require('mongodb').ObjectId;
const multer = require('multer');

// cek koneksi
// if (client.isConnected()){
//     const db = client.db("sekolah")
// } else{
//     console.log('koneksi database gagal')
// }

//daftar siswa siswa
routers.get('/siswa', async (req, res) => {
    if (client.isConnected()) {
        const db = client.db('sekolah')
        // kode untuk menampilkan list siswa res.send('menampilkan list siswa')
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
        // kode untuk menampilkan list siswa res.send('menampilkan list siswa')
        const siswa = await db.collection('siswa').findOne({
            _id: ObjectId(req.params.id)
        })
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

//tambah data siswa
routers.post('/siswa',multer().none(), async (req, res) => {
    if (client.isConnected) {
        const { nama, kelas } = req.body;
        const db = client.db("sekolah");
        const result = await db.collection("siswa").insertOne({
            nama: nama,
            kelas: kelas
        })

        if (result.insertedCount == 1) {
            res.send({
                status: 'success',
                message: 'tambah data berhasil'
            })

        } else {
            res.send({
                status: 'warning',
                message: 'tambah data gagal'
            })
        }

    } else {
        res.send({
            status: 'error',
            message: 'koneksi database gagal'
        })
    }
})

module.exports = routers
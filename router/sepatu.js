const express = require('express')
const router = express.Router()
const sepatuControllers = require('../controllers/sepatu')

router.route('/sepatu')
    .get(sepatuControllers.index)
    .post(sepatuControllers.tambah)

router.get('/sepatu/create', sepatuControllers.create)
router.get('/sepatu/:id', sepatuControllers.show)

router.put('/sepatu/:id', sepatuControllers.update)
router.delete('/sepatu/:id', sepatuControllers.delete)
router.route('/sepatu/update').post(sepatuControllers.baharui)
router.get('/sepatu/hapus/:id', sepatuControllers.hapus)
router.route('/sepatu/update/:_id/:id/:nama/:harga/:password').get(sepatuControllers.renderUpdate)

//UPDATE DATA
router.put('/sepatu/:idsepatu', sepatuControllers.update)
//HAPUS DATA
router.delete('/sepatu/:idsepatu', sepatuControllers.delete)
module.exports = router
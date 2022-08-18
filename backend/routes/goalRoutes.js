const express = require('express')
const router = express.Router()
const { getGoals, postGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getGoals).post(protect, postGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
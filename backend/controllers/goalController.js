const asyncHandler = require('express-async-handler')

// @desc    Get Goals returns goals for a user
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})

// @desc    Post Goal for a user
// @route   POST /api/goals
// @access  Private
const postGoal = asyncHandler(async (req, res) => {
    if(!req.body.text)
    {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Post Goal'})
})

// @desc    Update Goal for a user
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}` })
})

// @desc    Delete Goal for a user
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}
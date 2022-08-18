const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get Goals returns goals for a user
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
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
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

// @desc    Update Goal for a user
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(400)
        throw new Error("Goal not Found")
    }
    if (!req.user) 
    {
        res.status(401)
        throw new Error('User not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json(updatedGoal)
})

// @desc    Delete Goal for a user
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal)
    {
        res.status(400)
        throw new Error("Goal not Found")
    }
    if (!req.user) 
    {
        res.status(401)
        throw new Error('User not found')
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}
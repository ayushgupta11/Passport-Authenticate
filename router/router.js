const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
    res.json({
        message: 'Passport tutorial'
    })
})

router.get('/auth', passport.authenticate('google', {
    scope: ['profile']
}))

router.get('/auth/redirect', passport.authenticate('google'), (req, res) => {
    res.json({
        message: 'authenticated'
    })
})

module.exports = router
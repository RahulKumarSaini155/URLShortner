const express = require('express');
const { handleGenerateNewShortURL, handleRedirectUser, handleUserRegister, handleUserLogin } = require('../controllers/url');
const router = express.Router();
const passport = require('passport');

router.post('/register', handleUserRegister);
router.get('/login', handleUserLogin);
router.post('/url',passport.authenticate('jwt', {session: false}), handleGenerateNewShortURL);
router.get('/:shortId',passport.authenticate('jwt', {session: false}), handleRedirectUser);

module.exports = router;
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const drinkRoutes = require('./drinkRoutes');

router.use('/users', userRoutes);
router.use('/projects', drinkRoutes);

module.exports = router;

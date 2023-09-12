const router = require('express').Router();
const { Drink } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newDrink = await Drink.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newDrink);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const DrinkData = await Drink.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!DrinkData) {
      res.status(404).json({ message: 'No Drink found with this id!' });
      return;
    }

    res.status(200).json(DrinkData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

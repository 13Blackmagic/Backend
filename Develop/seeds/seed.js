const sequelize = require('../config/connection');
const { User, Drink } = require('../models');

const userData = require('./userData.json');
const drinkData = require('./DrinkData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const drink of drinkData) {
    await drink.create({
      ...drink,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


import { Sequelize } from "sequelize";


const sequelize = new Sequelize('mysql://ujzdzv3oku1oxspx:OjrkNu6IFrLqEV1LbJCO@bfshnly2jve9f4kjvlpf-mysql.services.clever-cloud.com:3306/bfshnly2jve9f4kjvlpf', {
  dialect: 'mysql'
});

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


export default sequelize
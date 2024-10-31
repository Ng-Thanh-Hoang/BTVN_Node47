import {Sequelize} from 'sequelize'

//tạo object sequelize để connect tới database
const sequelize = new Sequelize(
    "node47", //Database name
    "root",//Tên user
    "L@271102",//password của user
    {
        host: "localhost",
        port: 3307,
        dialect:"mysql"
    }
);

export default sequelize
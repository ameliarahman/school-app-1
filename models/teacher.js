'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    idSubject: DataTypes.INTEGER
  });
  Teacher.associate = model => {
    Teacher.belongsTo(model.Subject, { foreignKey: 'idSubject' })
  }
  return Teacher;
};
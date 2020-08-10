const { Model, DataTypes } = require('sequelize')

class Company extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.hasMany(models.Employee, { foreignKey: 'companyId', as: 'employees' })
  }
}

module.exports = Company
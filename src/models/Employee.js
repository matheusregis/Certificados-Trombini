const { Model, DataTypes } = require('sequelize')

class Employee extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'companyId', as: 'company' })
  }
}

module.exports = Employee
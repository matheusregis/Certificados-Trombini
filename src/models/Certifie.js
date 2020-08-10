const { Model, DataTypes } = require('sequelize')

class Certifie extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      filePathCertifie: DataTypes.STRING,
      filePathAso: DataTypes.STRING,
      emissionDate: DataTypes.DATE,
      durationDate: DataTypes.DATE,
    }, {
      sequelize
    })
  }
}

module.exports = Certifie
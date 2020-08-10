const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Company = require('../models/Company')
const Certifie = require('../models/Certifie')
const Employee = require('../models/Employee')

const connection = new Sequelize(dbConfig)

Company.init(connection)
Employee.init(connection)
Certifie.init(connection)

Company.associate(connection.models)
Employee.associate(connection.models)

module.exports = connection
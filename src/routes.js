const express = require ('express')

const CompanyController = require('./controllers/CompanyController')
const EmployeeController = require('./controllers/EmployeeController')

const routes = express.Router()

routes.get('/companies', CompanyController.index)
routes.post('/companies', CompanyController.store)
routes.put('/companies/:id', CompanyController.update)
routes.delete('/companies/:id', CompanyController.destroy)

routes.get('/companies/:companyId/employees', EmployeeController.index)
routes.post('/companies/:companyId/employees', EmployeeController.store)

 
module.exports = routes 
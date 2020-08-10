const Employee = require('../models/Employee')
const Company = require('../models/Company')

module.exports = {
  async index(req, res) {
    const { companyId } = req.params

    const company = await Company.findByPk(companyId, {
      include: { association: 'employees' }
    })

    if(!company) {
      return res.status(400).json({ message: 'Company not Found!' })
    }

    return res.json(company)
  },

  async store(req, res) {
    const { companyId } = req.params
    const { name } = req.body

    const company = await Company.findByPk(companyId)

    if(!company) {
      return res.status(400).json({ message: 'Company not Found!' })
    }
    const employee = await Employee.create({ 
      name,
      companyId 
    })
    return res.json(employee)
  }
}
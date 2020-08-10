const Company = require('../models/Company')

module.exports = {
  async index(req, res) {
    const companies = await Company.findAll()

    return res.json(companies)
  },

  async store(req, res) {
    const { name } = req.body;

    const company = await Company.create({name})

    return res.json(company)
  },

  async update(req, res) {
    const { id } = req.params;

    const company = await Company.findOne({ where: {id} })

    if (!company) return res.status(400).json({ error: 'Company not exists' })

    const { name } = await company.update(req.body)

    return res.json(company)
  },

  async destroy(req, res) {
    const { id } = req.params;

    const company = await Company.findOne({ where: {id} })

    if (!company) return res.status(400).json({ error: 'Company not exists' })
    await company.destroy()
    return res.status(200).json()
  }
}
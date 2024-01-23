'use strict'

const ProdutorRural = use('App/Models/ProdutorRural')

class ProdutorRuralRepository {
  async getAll() {
    return await ProdutorRural.all()
  }

  async getById(id) {
    return await ProdutorRural.find(id)
  }

  async create(data) {
    return await ProdutorRural.create(data)
  }

  async update(id, data) {
    const produtorRural = await ProdutorRural.findOrFail(id)
    produtorRural.merge(data)
    await produtorRural.save()
    return produtorRural
  }

  async delete(id) {
    const produtorRural = await ProdutorRural.findOrFail(id)
    await produtorRural.delete()
  }
}

module.exports = ProdutorRuralRepository

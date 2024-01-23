'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProdutorRuralSchema extends Schema {
  up () {
    this.create('produtor_rurals', (table) => {
      table.increments()
      table.string('cpf_cnpj').notNullable().unique()
      table.string('nome_produtor').notNullable()
      table.string('nome_fazenda').notNullable()
      table.string('cidade').notNullable()
      table.string('estado').notNullable()
      table.float('area_total_hectares').notNullable()
      table.float('area_agricultavel_hectares').notNullable()
      table.float('area_vegetacao_hectares').notNullable()
      table.string('culturas_plantadas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('produtor_rurals')
  }
}

module.exports = ProdutorRuralSchema

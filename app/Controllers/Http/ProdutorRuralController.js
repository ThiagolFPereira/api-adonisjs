'use strict'

const ProdutorRuralRepository = use('App/Repositories/ProdutorRuralRepository')
const ProdutorRural = use('App/Models/ProdutorRural');
class ProdutorRuralController {
  constructor() {
    this.produtorRuralRepository = new ProdutorRuralRepository()
  }

  /**
   * @swagger
   * /produtores:
   *   get:
   *     tags:
   *       - Produtores Rurais
   *     summary: Retorna todos os produtores rurais
   *     responses:
   *       '200':
   *         description: Lista de produtores rurais
   *         content:
   *           application/json:
   *             example:
   *               - id: 1
   *                 nome_produtor: 'João da Silva'
   *               - id: 2
   *                 nome_produtor: 'Maria Oliveira'
   *       '500':
   *         description: Erro ao recuperar produtores rurais
   *         content:
   *           application/json:
   *             example:
   *               error: 'Erro ao recuperar produtores rurais'
   */
  async index({ response }) {
    const produtores = await this.produtorRuralRepository.getAll()
    console.log(produtores)
    return response.json(produtores)
  }

  /**
   * @swagger
   * /produtores/{id}:
   *   get:
   *     tags:
   *       - Produtores Rurais
   *     summary: Retorna informações de um produtor rural específico
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID do produtor rural a ser consultado
   *         schema:
   *           type: integer
   *     responses:
   *       '200':
   *         description: Informações do produtor rural
   *         content:
   *           application/json:
   *             example:
   *               id: 1
   *               nome_produtor: 'João da Silva'
   *       '404':
   *         description: Produtor rural não encontrado
   *         content:
   *           application/json:
   *             example:
   *               error: 'Produtor rural não encontrado'
   *       '500':
   *         description: Erro ao recuperar informações do produtor rural
   *         content:
   *           application/json:
   *             example:
   *               error: 'Erro ao recuperar informações do produtor rural'
   */
  async show({ params, response }) {
    const produtor = await this.produtorRuralRepository.getById(params.id)
    return response.json(produtor)
  }

  /**
   * @swagger
   * /produtores:
   *   post:
   *     tags:
   *       - Produtores Rurais
   *     summary: Cria um novo produtor rural
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               cpf_cnpj:
   *                 type: string
   *                 description: CPF ou CNPJ do produtor rural
   *               nome_produtor:
   *                 type: string
   *                 description: Nome do produtor rural
   *               nome_fazenda:
   *                 type: string
   *                 description: Nome da fazenda
   *               cidade:
   *                 type: string
   *                 description: Cidade do produtor rural
   *               estado:
   *                 type: string
   *                 description: Estado do produtor rural
   *               area_total_hectares:
   *                 type: number
   *                 description: Área total em hectares da fazenda
   *               area_agricultavel_hectares:
   *                 type: number
   *                 description: Área agricultável em hectares
   *               area_vegetacao_hectares:
   *                 type: number
   *                 description: Área de vegetação em hectares
   *               culturas_plantadas:
   *                 type: array
   *                 items:
   *                   type: string
   *                 description: Culturas plantadas (Soja, Milho, Algodão, Café, Cana de Açúcar)
   *     responses:
   *       '201':
   *         description: Produtor rural cadastrado com sucesso
   *         content:
   *           application/json:
   *             example:
   *               id: 1
   *               cpf_cnpj: '12345678900'
   *               nome_produtor: 'João da Silva'
   *               nome_fazenda: 'Fazenda Feliz'
   *               cidade: 'São Paulo'
   *               estado: 'SP'
   *               area_total_hectares: 100
   *               area_agricultavel_hectares: 80
   *               area_vegetacao_hectares: 20
   *               culturas_plantadas: ['Soja', 'Milho']
   *       '500':
   *         description: Erro ao cadastrar produtor rural
   *         content:
   *           application/json:
   *             example:
   *               error: 'Erro ao cadastrar produtor rural'
   */
  async store({ request, response }) {
    const data = request.only([
      'cpf_cnpj',
      'nome_produtor',
      'nome_fazenda',
      'cidade',
      'estado',
      'area_total_hectares',
      'area_agricultavel_hectares',
      'area_vegetacao_hectares',
      'culturas_plantadas',
    ])

    const produtorRural = await this.produtorRuralRepository.create(data)

    return response.status(201).json(produtorRural)
  }

  /**
   * @swagger
   * /produtores/{id}:
   *   put:
   *     tags:
   *       - Produtores Rurais
   *     summary: Atualiza um produtor rural existente
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID do produtor rural a ser atualizado
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               cpf_cnpj:
   *                 type: string
   *                 description: CPF ou CNPJ do produtor rural
   *               nome_produtor:
   *                 type: string
   *                 description: Nome do produtor rural
   *     responses:
   *       '200':
   *         description: Produtor rural atualizado com sucesso
   *         content:
   *           application/json:
   *             example:
   *               id: 1
   *               nome_produtor: 'João da Silva'
   *       '404':
   *         description: Produtor rural não encontrado
   *         content:
   *           application/json:
   *             example:
   *               error: 'Produtor rural não encontrado'
   *       '500':
   *         description: Erro ao atualizar produtor rural
   *         content:
   *           application/json:
   *             example:
   *               error: 'Erro ao atualizar produtor rural'
   */
  async update({ params, request, response }) {
    const data = request.only([
      'cpf_cnpj',
      'nome_produtor',
      'nome_fazenda',
      'cidade',
      'estado',
      'area_total_hectares',
      'area_agricultavel_hectares',
      'area_vegetacao_hectares',
      'culturas_plantadas',
    ])

    const produtorRural = await this.produtorRuralRepository.update(params.id, data)

    return response.json(produtorRural)
  }

  /**
   * @swagger
   * /produtores/{id}:
   *   delete:
   *     tags:
   *       - Produtores Rurais
   *     summary: Exclui um produtor rural existente
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID do produtor rural a ser excluído
   *         schema:
   *           type: integer
   *     responses:
   *       '204':
   *         description: Produtor rural excluído com sucesso
   *       '404':
   *         description: Produtor rural não encontrado
   *         content:
   *           application/json:
   *             example:
   *               error: 'Produtor rural não encontrado'
   *       '500':
   *         description: Erro ao excluir produtor rural
   *         content:
   *           application/json:
   *             example:
   *               error: 'Erro ao excluir produtor rural'
   */
  async destroy({ params, response }) {
    await this.produtorRuralRepository.delete(params.id)
    return response.status(204).send()
  }

  /**
   * @swagger
   * /dashboard:
   *   get:
   *     tags:
   *       - Dashboard
   *     summary: Retorna dados para o dashboard
   *     responses:
   *       '200':
   *         description: Dados do dashboard recuperados com sucesso
   *         content:
   *           application/json:
   *             example:
   *               totalProdutores: 50
   *       '500':
   *         description: Erro ao recuperar dados do dashboard
   *         content:
   *           application/json:
   *             example:
   *               error: 'Erro ao recuperar dados do dashboard'
   */
  async dashboard({ response }) {
    try {
      // Lógica para calcular totais para o dashboard
      const totalProdutores = await ProdutorRural.query().getCount()

      return response.status(200).json({
        totalProdutores,
      });
    } catch (error) {
      console.log(error)
      return response.status(500).send({ error: 'Erro ao recuperar dados do dashboard' });
    }
  }
}

module.exports = ProdutorRuralController
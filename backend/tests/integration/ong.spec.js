const request = require('supertest');
const app = require('./../../src/app');
const connection = require('./../../src/database/connection');

describe('ONG', () => {

  beforeEach( async () => {
    // Sempre usar o migrate.rollback() para zerar o banco de dados de test para nao deixar superlotado.`
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "ONG Joao Alfredo",
        email: "contato@teste.com",
        whatsapp: "81000000000",
        city: "Joao Alfredo",
        uf: "PE"
      });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    
  });
});
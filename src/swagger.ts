import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'My Bland APIs',
      version: '1.0.0',
      description: 'API documentation for Andela Bland project',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      },
    ],
  },
  apis: ['./routes/*.ts']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

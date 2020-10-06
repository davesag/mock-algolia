const fakePaths = {
  '/ping': {
    get: {
      tags: ['root'],
      summary: 'Get Server Information',
      description: 'Returns information about the server',
      operationId: 'ping',
      responses: {
        200: {
          description: 'success',
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/PingResponse' }
            }
          }
        }
      }
    }
  },
  '/function/{id}': {
    get: {
      tags: ['something'],
      summary: 'Find source by ID',
      description: 'Returns a single source',
      operationId: 'v1/function/someController',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID of source to return',
          required: true,
          type: 'integer',
          format: 'int64'
        }
      ],
      responses: {
        200: {
          description: 'successful operation',
          content: {
            'application/json': {
              schema: {
                $ref: '#/definitions/Source'
              }
            }
          }
        },
        400: { description: 'Invalid ID supplied' },
        404: { description: 'Source not found' }
      }
    }
  }
}

module.exports = fakePaths

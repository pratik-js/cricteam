const schema = {
  //   $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Team',
  description: 'Team detail',
  type: 'object',
  properties: {
    id: {
      description: 'The unique identifier for a entity',
      type: 'string'
    },
    name: {
      description: 'Name of Team',
      type: 'string',
      pattern: "^[a-zA-Z0-9' ]+$"
    },
    totalPoints: {
      description: 'totalPoint',
      type: 'integer'
    }
  },
  required: ['name', 'totalPoints'],
  errorMessages: {}
};

module.exports = { schema };

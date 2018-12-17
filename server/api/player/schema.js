const schema = {
  //   $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Player',
  description: 'Player detail',
  type: 'object',
  properties: {
    id: {
      description: 'The unique identifier for a entity',
      type: 'string'
    },
    name: {
      description: 'Name of player',
      type: 'string',
      pattern: "^[a-zA-Z ']+$"
    },
    playerTypeId: {
      description: 'Player Type',
      type: 'integer'
    },
    photo: {
      description: 'photo',
      type: ['string']
    },
    records: {
      description: 'record of batting bowling',
      type: ['object', 'null']
    },
    teamId: {
      description: 'Team Id',
      type: 'string'
    },
    point: {
      description: 'point',
      type: 'integer'
    },
    sold: {
      description: 'sold',
      type: 'boolean'
    },
    isCaptain: {
      description: 'Caption of Team',
      type: 'boolean'
    },
    isNew: {
      description: 'New Palyer',
      type: 'boolean'
    }
  },
  required: ['name', 'playerType', 'record', 'point', 'sold', 'isCaptain'],
  errorMessages: {}
};

module.exports = { schema };

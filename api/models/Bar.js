/**
* Bar.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      foo: {
          model: 'foo'
      },
      myFavoriteFoos: {
          collection: 'foo',
          via: 'myFavoriteBars'
      }
  }

  //beforeCreate: function() {
  //
  //},
  //
  //beforeUpdate

};


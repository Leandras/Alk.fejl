'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {
 category () {
    return this.belongsTo('App/Model/Category')
  }
}

module.exports = Category

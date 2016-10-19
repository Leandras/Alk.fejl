'use strict'

const Lucid = use('Lucid')

class Recipe extends Lucid {
 recipes () {
    return this.hasMany('App/Model/Recipe')
  }
}

module.exports = Recipe

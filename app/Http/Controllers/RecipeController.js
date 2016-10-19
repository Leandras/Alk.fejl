'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')

class RecipeController {
    *index (request, response){
       // const categories = yield Database.from('categories').select('*');
       const categories = yield Category.all()
       //const cdata = categories.toJSON();
        //console.log(categories.toJSON());

        for (let category of categories){
            const recipes = yield category.recipes();
            cat.catRecipes = recipes;
        } 
        console.log(categories.toJSON());
        yield response.sendView('main', { 
            name: 'Adonis',
            categories: categories.toJSON(),
        });
    }
}

module.exports = RecipeController

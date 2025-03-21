
var findAllRecipes = function(recipes, ingredients, supplies) {
    let hash = new Map();
    for(let str of supplies) {
        hash.set(str, 1);
    }
    console.log(hash);
    let res = [];

    let done = true;
    while(done) {
        done = false;
        for(let i=0; i<recipes.length; i++) {
            if(!hash.has(recipes[i])) {
                let recipeExists = true;
                
                for(let x=0; x<ingredients[i].length; x++) {
                    if(!hash.has(ingredients[i][x])) {
                        recipeExists = false;
                    }
                }
                if(recipeExists) {
                    done = true;
                    res.push(recipes[i]);
                    hash.set(recipes[i], 1);
                }
            }
        }
    }
    return res;
};
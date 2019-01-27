

const renderer = new Renderer()

const fetch = function(){
    let input = $(`#input`).val()
    let ingredients = $(`#ingredient-search`).val()
$.get(`/recipes/${input}/?ing=${ingredients}`, function(response){
    renderer.render(response)
})
}


$(`#search-results`).on(`click`, `img`, function(){
let firstIngredient = $(this).siblings(`ul`).children().first().text()
// let firstIngredient = $(this).closest(`.recipe`).find(`li`).first().text()
console.log(firstIngredient)
})




const renderer = new Renderer()

const fetch = function(){
    let input = $(`#input`).val()
$.get(`/recipes/${input}`, function(response){
    renderer.render(response)
})
}

const firstIng = function(){
let firstIngredient = $(this).siblings(".ingredients").children().first()
console.log(firstIngredient)

}


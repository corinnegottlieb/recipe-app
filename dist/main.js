
const source = $(`#recipe-template`).html()
const template = Handlebars.compile(source)

const render = function(results){
    $(`#search-results`).empty()
    let newHTML = template({results})
    $(`#search-results`).append(newHTML)
}

const fetch = function(){
    let input = $(`#input`).val()
$.get(`/recipes/${input}`, function(response){
    render(response)
})
}


class Renderer {
    render(results){
        const source = $(`#recipe-template`).html()
        const template = Handlebars.compile(source)
        let newHTML = template({results})
        $(`#search-results`).empty().append(newHTML)
    } 
}
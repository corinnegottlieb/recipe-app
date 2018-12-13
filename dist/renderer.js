class Renderer {
    render(results){
        $(`#search-results`).empty()
        const source = $(`#recipe-template`).html()
        const template = Handlebars.compile(source)
        let newHTML = template({results})
        $(`#search-results`).append(newHTML)

    }
    
}
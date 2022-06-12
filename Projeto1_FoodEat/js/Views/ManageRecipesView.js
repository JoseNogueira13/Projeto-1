function manageRecipesView() {
    
    /*let result = `<button class="btn btn-secondary dropdown-toggle" type="button" id="admin" data-bs-toggle="dropdown" aria-expanded="false">Select Region
                </button>
                <ul class="dropdown-menu" aria-labelledby="admin"  style="margin-left: 500px;">`
    for (const region of JSON.parse(localStorage.regions)) {
        console.log(region.title);
        result += `<li><a class="dropdown-item">${region.title}</a></li>`
    };
    result += `</ul>`;*/

    let result = `<label for="regionsSelect">Choose region:</label>
  <select id="region" name="region">`
    for (const region of JSON.parse(localStorage.regions)) {
        console.log(region.title);
        result += `<option value="${region.title}">${region.title}</option>`
  
    };
    result += `</select>`;

    // colocar o conteudo na navbar dependendo do estado de login do utilizador
document.querySelector("#regionsSelect").innerHTML = result;

}
manageRecipesView();
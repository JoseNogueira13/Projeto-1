import * as Region from "../Models/RegionModel.js";


function addRegion() {
    Region.init();
    manageRegionTable(Region.getRegions());
    document.querySelector("#formAddRegion").addEventListener("submit", (event) => {
        event.preventDefault();

        try {
            Region.addRegion(
                document.querySelector("#txtRegionTitle").value,
                document.querySelector("#txtRegionImage").value,
            )
            alert("Region was added")
            manageRegionTable(Region.getCurrentRegion());
            location.reload()
        }   catch (error) {
            alert(error.message)
        }
    });
}

function manageRegionTable(regions = []) {
    const table = document.querySelector('table')

    table.innerHTML = `
    <tr class = "table-bordered">
        <th>Title</th><th>Image</th>
    </tr>
    `

    let result = ''

    for (let region of regions) {
        result += `
                <tr class = 'regionRow'>
                    <td>${region.title}</td>
                    <td>${region.image}</td>    <td>    <button class = "btnRemove btn-danger removeRegion" id = "${region.title}">Remove</button>   </td>    
                </tr>
        `
    }
    table.innerHTML += result
}

addRegion();

const btnsRemoveRegion = document.getElementsByClassName('removeRegion');

for (const button of btnsRemoveRegion) {
    button.addEventListener('click', () => {
        if(confirm(`Are you sure you want to remove the region "${button.id}"?`)) {
            Region.removeRegion(button.id);
            location.reload();
        }
    })
}
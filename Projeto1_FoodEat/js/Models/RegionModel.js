class Region {
    title = "";
    image = "";
    

    constructor(title, image, color) {
        this.title = title;
        this.image = image;    
    }
}

let regions;

// CARREGAR REGIOES DA LOCAL STORAGE
export function init() {
    regions = localStorage.regions ? JSON.parse(localStorage.regions) : [];
}

//ADICIONAR REGIOES
export function addRegion(title, image,) {
    if  (regions.some((region) => region.title === title)) {
        throw Error(`The region ${Region.title} already exists`);
    }else {
        regions.push(new Region(title,image));
        localStorage.setItem('regions', JSON.stringify(regions));
    }
}

//REMOVER REGIOES
export function removeRegion(title) {
    regions = regions.filter((region) => region.title !== title);
    localStorage.setItem("regions", JSON.stringify(regions));
}

//DEFINIR REGIAO ATUAL

export function setCurrentRegion(title) {
    localStorage.setItem("region", title);
}

//OBTER A INFORMAÇAO DA REGIAO ESCOLHIDA

export function getCurrentRegion() {
    return regions.find((region) => region.title === localStorage.getItem("region"));
}

//OBTER AS REGIOES

export function getRegions () {
    return regions
}
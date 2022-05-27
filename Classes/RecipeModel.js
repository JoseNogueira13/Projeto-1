class recipe {
    image = "";
    title = "";
    description = "";
    recipeWritten = [];
    recipeVideo = "";
    type = "";
    regionID = 0;
    
    
    constructor(image, title, description, recipeWritten, recipeVideo, type){
        this.image = image;
        this.title = title;
        this.description = description;
        this.recipeWritten = recipeWritten;
        this.recipeVideo = recipeVideo;
        this.type = type;
    }
}
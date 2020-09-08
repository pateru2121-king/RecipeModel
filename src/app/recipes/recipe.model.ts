import { Ingredient } from '../shared/ingredient.model';


export class Recipe{
    public name : string;
    public description : string;
    public imagepath : string;
    public ingrediants: Ingredient[];

    constructor(name: string, description: string, imagepath: string, ingrediants: Ingredient[]){
            this.name = name;
            this.description = description;
            this.imagepath = imagepath;
            this.ingrediants = ingrediants;
    }
}
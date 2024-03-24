export interface Beer {
    id: number;
    name: string;
    tagline: string;
    description: string;
    image_url: string;
    abv: number;
    ibu: number;
    ingredients: {
        malt: { name: string }[];
        hops: { name: string }[];
        yeast: string;
    };
    country: string; 
    fermentation_process: string; 
}
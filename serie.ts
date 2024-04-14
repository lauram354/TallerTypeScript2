export class Serie{
    rank: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(rank: number, name: string, channel: string, seasons: number, description: string, link: string, image:string){
        this.rank = rank;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
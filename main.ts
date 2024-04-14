import { Serie } from './serie.js';
import { series} from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;
const cardBody: HTMLElement = document.getElementById("cards")!;



renderSeriesInTable(series);

averageSeasonsElm.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void{
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.rank}</td>
                                <td><a id="more-info-${serie.name}" href="#card-${serie.name}"> ${serie.name}</a></td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);

        const moreInfoBtn: HTMLElement =  document.getElementById(`more-info-${serie.name}`)!;
        moreInfoBtn.addEventListener("click", ()=> {
            showMoreInfo(serie);
        });
        
    

    });
}

function getAverageSeasons(series: Serie[]): number {
    let total: number = 0;
    const numSeries: number = series.length;
    series.forEach((serie) => total = total + serie.seasons);
    const averageSeasons: number = total/numSeries;
    return averageSeasons;    

}

function showMoreInfo(serie: Serie): void{
    createCard(serie);
    const imageCard = document.getElementById(`img-${serie.name}`)! as HTMLImageElement;

    imageCard.src = serie.image;
    imageCard.alt = serie.name;
    imageCard.width = 250;

    const textElement: HTMLElement = document.getElementById("nombre")!;
    textElement.innerText = serie.name;

    const descElement: HTMLElement = document.getElementById("descrip")!;
    descElement.innerText = serie.description;

    const linkElement: HTMLAnchorElement = document.getElementById("link")! as HTMLAnchorElement;
    linkElement.href = serie.link;
    linkElement.target = "_blank";
    linkElement.innerText = serie.link;

    const card: HTMLElement = document.getElementById(`card-${serie.name}`)!;
    card.style.display = "flex";

    
}

    
function createCard(serie: Serie):void{
    let cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.id = `card-${serie.name}`;
    cardBody.appendChild(cardElement);
    let imgElement = document.createElement("img");
    imgElement.id = `img-${serie.name}`
    let textElement = document.createElement("h3");
    textElement.id = `name-${serie.name}`
    let descElement = document.createElement("p");
    descElement.id = `descrip-${serie.name}`
    let linkElement = document.createElement("a");
    linkElement.id = `link-${serie.name}`
    cardBody.appendChild(imgElement);
    cardBody.appendChild(textElement);
    cardBody.appendChild(descElement);
    cardBody.appendChild(linkElement);
}

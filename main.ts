import { Serie } from './serie.js';
import { series} from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;
let cardBody: HTMLElement = document.getElementById("cards")!;
if (!cardBody) {
    cardBody = document.createElement("div");
    cardBody.id = "cards";
    document.body.appendChild(cardBody);
}


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
        moreInfoBtn.onclick = () => showMoreInfo(serie);

        let cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.id = `card-${serie.name}`;
        cardElement.style.display = "none";
        cardElement.style.width = "18rem";
        let imgElement = new Image();
        imgElement.id = "imagen"
        imgElement.style.width = "100%"; 
        imgElement.style.height = "auto"; 
        imgElement.style.objectFit = "cover"; 
        let textElement = document.createElement("h3");
        textElement.id = "nombre"
        let descElement = document.createElement("p");
        descElement.id = "descrip"
        let linkElement = document.createElement("a");
        linkElement.id = "link"
        cardBody.appendChild(cardElement);
        cardBody.appendChild(imgElement);
        cardBody.appendChild(textElement);
        cardBody.appendChild(descElement);
        cardBody.appendChild(linkElement);

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
    hideAll(series)
    const imageCard = document.getElementById("imagen")! as HTMLImageElement;

    imageCard.src = serie.image;
    imageCard.alt = serie.name;
    

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

function hideAll(series: Serie[]):void{
    series.forEach((serie) => {
        let moreInfoCard: HTMLElement = document.getElementById(`card-${serie.name}`)!;
        moreInfoCard.style.display= "none";
    });
}
    

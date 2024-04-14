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
        cardBody.appendChild(cardElement);
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
    const moreInfoCard: HTMLElement = document.getElementById(`card-${serie.name}`)!;
    let imgElement = new Image();
    imgElement.src = serie.image;
    imgElement.alt = serie.name;
    imgElement.width = 250;
    let textElement = document.createElement("h3");
    textElement.innerText = serie.name;
    let descElement = document.createElement("p");
    descElement.innerText = serie.description;
    let linkElement = document.createElement("a");
    linkElement.href = serie.link;
    linkElement.target = "_blank";
    linkElement.innerText = serie.link;

    moreInfoCard.appendChild(imgElement);
    moreInfoCard.appendChild(textElement);
    moreInfoCard.appendChild(descElement);
    moreInfoCard.appendChild(linkElement);
    

    moreInfoCard.style.display = "flex";

}


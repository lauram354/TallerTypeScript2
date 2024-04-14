import { Serie } from './serie.js';
import { series} from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const averageSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);

averageSeasonsElm.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void{
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.rank}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td>
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let total: number = 0;
    const numSeries: number = series.length;
    series.forEach((serie) => total = total + serie.seasons);
    const averageSeasons: number = total/numSeries;
    return averageSeasons;    

}
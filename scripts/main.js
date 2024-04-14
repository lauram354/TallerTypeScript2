import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById("average-seasons");
renderSeriesInTable(series);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.rank, "</td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var total = 0;
    var numSeries = series.length;
    series.forEach(function (serie) { return total = total + serie.seasons; });
    var averageSeasons = total / numSeries;
    return averageSeasons;
}

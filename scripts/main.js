import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById("average-seasons");
var cardBody = document.getElementById("cards");
if (!cardBody) {
    cardBody = document.createElement("div");
    cardBody.id = "cards";
    document.body.appendChild(cardBody);
}
renderSeriesInTable(series);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.rank, "</td>\n                                <td><a id=\"more-info-").concat(serie.name, "\" href=\"#card-").concat(serie.name, "\"> ").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var moreInfoBtn = document.getElementById("more-info-".concat(serie.name));
        moreInfoBtn.onclick = function () { return showMoreInfo(serie); };
        var cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.id = "card-".concat(serie.name);
        cardElement.style.display = "none";
        cardBody.appendChild(cardElement);
    });
}
function getAverageSeasons(series) {
    var total = 0;
    var numSeries = series.length;
    series.forEach(function (serie) { return total = total + serie.seasons; });
    var averageSeasons = total / numSeries;
    return averageSeasons;
}
function showMoreInfo(serie) {
    var moreInfoCard = document.getElementById("card-".concat(serie.name));
    var imgElement = new Image();
    imgElement.src = serie.image;
    imgElement.alt = serie.name;
    imgElement.width = 250;
    var textElement = document.createElement("h3");
    textElement.innerText = serie.name;
    var descElement = document.createElement("p");
    descElement.innerText = serie.description;
    var linkElement = document.createElement("a");
    linkElement.href = serie.link;
    linkElement.target = "_blank";
    linkElement.innerText = serie.link;
    moreInfoCard.appendChild(imgElement);
    moreInfoCard.appendChild(textElement);
    moreInfoCard.appendChild(descElement);
    moreInfoCard.appendChild(linkElement);
    moreInfoCard.style.display = "flex";
}

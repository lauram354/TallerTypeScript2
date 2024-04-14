import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasonsElm = document.getElementById("average-seasons");
var cardBody = document.getElementById("cards");
renderSeriesInTable(series);
averageSeasonsElm.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.rank, "</td>\n                                <td><a id=\"more-info-").concat(serie.name, "\" href=\"#card-").concat(serie.name, "\"> ").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var moreInfoBtn = document.getElementById("more-info-".concat(serie.name));
        moreInfoBtn.addEventListener("click", function () {
            showMoreInfo(serie);
        });
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
    createCard(serie);
    var imageCard = document.getElementById("img-".concat(serie.name));
    imageCard.src = serie.image;
    imageCard.alt = serie.name;
    imageCard.width = 250;
    var textElement = document.getElementById("nombre");
    textElement.innerText = serie.name;
    var descElement = document.getElementById("descrip");
    descElement.innerText = serie.description;
    var linkElement = document.getElementById("link");
    linkElement.href = serie.link;
    linkElement.target = "_blank";
    linkElement.innerText = serie.link;
    var card = document.getElementById("card-".concat(serie.name));
    card.style.display = "flex";
}
function createCard(serie) {
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.id = "card-".concat(serie.name);
    cardBody.appendChild(cardElement);
    var imgElement = document.createElement("img");
    imgElement.id = "img-".concat(serie.name);
    var textElement = document.createElement("h3");
    textElement.id = "name-".concat(serie.name);
    var descElement = document.createElement("p");
    descElement.id = "descrip-".concat(serie.name);
    var linkElement = document.createElement("a");
    linkElement.id = "link-".concat(serie.name);
    cardBody.appendChild(imgElement);
    cardBody.appendChild(textElement);
    cardBody.appendChild(descElement);
    cardBody.appendChild(linkElement);
}

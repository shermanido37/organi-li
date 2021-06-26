var currentPlace = 0;

function nextImg() {
    currentPlace++;
    chaing()
}

function previousImg() {
    currentPlace--;
    chaing()
}

function chaing() {
    if (currentPlace < 0) {
        currentPlace = 4;
    }
    if (currentPlace > 4) {
        currentPlace = 0;
    }

    var outputimg = [
        "images/gallary/img/1.png",
        "images/gallary/img/2.png",
        "images/gallary/img/3.png",
        "images/gallary/img/4.png",
        "images/gallary/img/5.png"];

    var outputalt = [
        "איור המדגים את השלב הראשון בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב השני בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב השלישי בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב הרביעי בהקמת הדליה על גבי חוט",
        "איור המדגים את השלב החמישי בהקמת הדליה על גבי חוט"
    ];
    
    document.getElementById("imgFromJs").src = outputimg[currentPlace];
    document.getElementById("imgFromJs").alt = outputalt[currentPlace];
    document.getElementById("imgFromJs").title = outputalt[currentPlace];
}
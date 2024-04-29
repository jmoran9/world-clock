setInterval(function () {//Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");


    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss:SS [<small>]A[</small>]")}`;
}, 1);

setInterval(function () {//Boston
    let BostonElement = document.querySelector("#boston");
    let BostonDateElement = BostonElement.querySelector(".date");
    let BostonTimeElement = BostonElement.querySelector(".time");
    let BostonTime = moment().tz("America/New_York");


    BostonDateElement.innerHTML = BostonTime.format("MMMM Do YYYY");
    BostonTimeElement.innerHTML = `${BostonTime.format("h:mm:ss:SS [<small>]A[</small>]")}`;
}, 1);
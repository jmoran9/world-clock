function updateTime() {//Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");
        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss [<small>]A[</small>]")}`;
    }
}

setInterval(function () {
    let BostonElement = document.querySelector("#boston");
    if (BostonElement) {
        let BostonDateElement = BostonElement.querySelector(".date");
        let BostonTimeElement = BostonElement.querySelector(".time");
        let BostonTime = moment().tz("America/New_York");


        BostonDateElement.innerHTML = BostonTime.format("MMMM Do YYYY");
        BostonTimeElement.innerHTML = `${BostonTime.format("h:mm:ss [<small>]A[</small>]")}`;
    }
}, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    };
    let cityName = cityTimeZone.replace("_", " ").split("/")[1]
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
      <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")} </div>
        </div>
        <a href="/">All cities</a>`
}

updateTime();
setInterval(updateTime, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
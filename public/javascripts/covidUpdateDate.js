async function getapi() {
    // console.log("kkk");
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
    // fetch() timeouts at 300 seconds in Chrome
    const data = await response.json();
    covid19Date = data;

    document.getElementById("updatePreDate").innerHTML = covid19Date[0].update_date;
}

getapi();
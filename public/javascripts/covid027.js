async function getapi() {
    // console.log("kkk");
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all");
    // fetch() timeouts at 300 seconds in Chrome
    const data = await response.json();
    covid19data = data;
    console.log(covid19data[0].update_date)

    document.getElementById("newCase").innerHTML = covid19data[0].new_case;
    document.getElementById("newCase1").innerHTML = covid19data[0].new_case;
    document.getElementById("totalCase").innerHTML = covid19data[0].total_case;
    document.getElementById("newCaseThai").innerHTML = covid19data[0].new_case_excludeabroad;
    document.getElementById("totalCaseThai").innerHTML = covid19data[0].total_case_excludeabroad;
    document.getElementById("newDeath").innerHTML = covid19data[0].new_death;
    document.getElementById("totalDeath").innerHTML = covid19data[0].total_death;
    document.getElementById("newRecovered").innerHTML = covid19data[0].new_recovered;
    document.getElementById("totalRecovered").innerHTML = covid19data[0].total_recovered;
}

getapi();

let covid19data = [];

async function getapi() {
    // console.log("kkk");
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces");
    // fetch() timeouts at 300 seconds in Chrome
    const data = await response.json();
    covid19data = data;
    console.log(data);
    console.log(covid19data[0].update_date)

    document.getElementById("update_date").innerHTML = covid19data[0].update_date;
}

getapi();

function showData() {
    let provinceTH = document.getElementById("province").value;
    console.log(provinceTH)

    let searchcovid19data = covid19data.find((tree) => {
        if (tree.province === provinceTH) return true;
    })

    console.log(searchcovid19data)
    document.getElementById("newCase").innerHTML = searchcovid19data.new_case;
    document.getElementById("newDeath").innerHTML = searchcovid19data.new_death;
}
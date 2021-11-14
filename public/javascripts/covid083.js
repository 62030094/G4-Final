let covid19data = [];

async function getapi() {
    // console.log("kkk");
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces"); //link 9
    // fetch() timeouts at 300 seconds in Chrome
    const data = await response.json();
    covid19data = data;
    console.log(data);
    console.log(covid19data[0].update_date)

    document.getElementById("updateDate").innerHTML = covid19data[0].update_date;
}

getapi();

function showData() {
    let provinceTH = document.getElementById("province").value;
    console.log(provinceTH)

    let searchcovid19data = covid19data.find((tree) => {
        if (tree.province === provinceTH) return true;
    })

    console.log(searchcovid19data)
    document.getElementById('txn_date').innerHTML = searchcovid19data.txn_date;
    document.getElementById('province').innerHTML = searchcovid19data.province;
    document.getElementById('new_case').innerHTML = searchcovid19data.new_case;
    document.getElementById('total_case').innerHTML = searchcovid19data.total_case;
    document.getElementById('new_case_excludeabroad').innerHTML = searchcovid19data.new_case_excludeabroad;
    document.getElementById('total_case_excludeabroad').innerHTML = searchcovid19data.total_case_excludeabroad;
    document.getElementById('new_death').innerHTML = searchcovid19data.new_death;
    document.getElementById('total_death').innerHTML = searchcovid19data.total_death;









}
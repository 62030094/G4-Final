
    async function getapi() {
        const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces");

        const data = await response.json();

        console.log(data);
        covid19data = data;

    }

    getapi()

    function onClickFunction(){
        let dateInput =  document.getElementById("dateInput").value;
        let provinceTH = document.getElementById("exampleDataList").value;


        let searchcovid19data = covid19data.find((data) => {
            if (data.txn_date === dateInput && data.province === provinceTH) return true;
        })

        document.getElementById('new_case').innerHTML = searchcovid19data.new_case;
        document.getElementById('total_case').innerHTML = searchcovid19data.total_case;
        document.getElementById('new_case_excludeabroad').innerHTML = searchcovid19data.new_case_excludeabroad;
        document.getElementById('total_case_excludeabroad').innerHTML = searchcovid19data.total_case_excludeabroad;
        document.getElementById('total_death').innerHTML = searchcovid19data.total_death;

        console.log(searchcovid19data)
    }

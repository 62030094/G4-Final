
    async function getapi() {
        const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/round-1to2-by-provinces");
        const data = await response.json();
        console.log(data);
        covid19data = data;
    }
    getapi();
    function onClickFunction(){
        console.log("data");
        let birthday =  document.getElementById("dateInput").value;
        let provinceTH = document.getElementById("provinceTH").value;
        console.log(birthday);
        console.log(provinceTH);

        let searchcovid19data = covid19data.find((data) => {
            if (data.txn_date === birthday && data.province === provinceTH) return true;
        })
            document.getElementById('txn_date').innerHTML = searchcovid19data.txn_date;
            document.getElementById('province').innerHTML = searchcovid19data.province;
            document.getElementById('new_case').innerHTML = searchcovid19data.new_case;
            document.getElementById('total_case').innerHTML = searchcovid19data.total_case;
            document.getElementById('new_case_excludeabroad').innerHTML = searchcovid19data.new_case_excludeabroad;
            document.getElementById('total_case_excludeabroad').innerHTML = searchcovid19data.total_case_excludeabroad;
            document.getElementById('new_ death').innerHTML = searchcovid19data.new_death;
            document.getElementById('total_death').innerHTML = searchcovid19data.total_death;
            console.log(searchcovid19data);
    }
    
    function onClickFunction2(data){
        let birthday =  document.getElementById("dateInput2").value;
        let searchcovid19data = covid19data.find((data) => {
        if (data.txn_date === birthday) return true;
    })
            
            console.log(searchcovid19data);
    
            document.getElementById('tableTxn').innerHTML += `
                    <tr>
                        <th scope="row" id="myRowTable">${i}</th>
                        <td colspan="2" id="province2">${searchcovid19data.province[i]}</td>
                        <td  id="new_case2">-</td>
                        <td id="total_case2">-</td>
                        <td id="new_ death2">-</td>
                        <td id="total_death2">-</td>
                        <td id="new_case_excludeabroad2">-</td>
                        <td id="total_case_excludeabroad2">-</td>
                    </tr>
            `
        }
        
    

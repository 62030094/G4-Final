async function getapi() {
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces");
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
    
            // แสดงผลข้อมูลที่หน้าเว็บไซน์
            document.getElementById('province').innerHTML = searchcovid19data.province;
            document.getElementById('new_case').innerHTML = searchcovid19data.new_case;
            document.getElementById('total_case').innerHTML = searchcovid19data.total_case;
            document.getElementById('new_case_excludeabroad').innerHTML = searchcovid19data.new_case_excludeabroad;
            document.getElementById('total_case_excludeabroad').innerHTML = searchcovid19data.total_case_excludeabroad;
            document.getElementById('new_death').innerHTML = searchcovid19data.new_death;        
            document.getElementById('total_death').innerHTML = searchcovid19data.total_death;
            document.getElementById('update_date').innerHTML = searchcovid19data.update_date;

        }
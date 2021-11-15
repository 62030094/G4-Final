async function getapi() {
    const response = await JSC.fetch("	https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists");
    const data = await response.text();
    //console.log(data);
    let covid19data = JSC.csv2Json(data,{
        columns: ["date", "steps", "goal"]
        
    });
    //console.log(covid19data);
    var order=[];
    var sex=[];
    var age=[];
    var agerange=[];
    var country=[];
    var risk=[];
    var cause=[];
    var province=[];
    for(let i=0;i<covid19data.length-1;i++){
        
        order.push(covid19data[i][1]); 
        sex.push(covid19data[i][2]);
        age.push(covid19data[i][3]);
        agerange.push(covid19data[i][4]);
        country.push(covid19data[i][5]);
        risk.push(covid19data[i][7]);
        cause.push(covid19data[i][8]);
        province.push(covid19data[i][9]);
                    
    }
    console.log(order);
    console.log(sex);
    console.log(age);
    console.log(agerange);
    console.log(country);
    console.log(risk);
    console.log(cause);
    console.log(province);


    //document.getElementById("order").innerHTML = covid19data[0].update_date;
    

    
    //console.log(sex);       

    
}
getapi();


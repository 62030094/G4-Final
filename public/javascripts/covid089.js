function provincesearch(){
    document.getElementById("tabledata").innerHTML=`<tr>
    <th class="text-left">ลำดับ</th>
    <th class="text-left">เพศ</th>
    <th class="text-left">อายุ</th>
    <th class="text-left">จังหวัด</th>
    <th class="text-left">ประเทศ</th>
    <th  class="text-left">ความเสี่ยง</th>
    <th  class="text-left">สาเหตุการติดเชื้อ</th>
    </tr> `;

    var search = document.getElementById("sel-province").value;
    console.log(search);
    const getdata =  `https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists`;
    showdata();
async function showdata(){
    var textdate =[];
    var gender =[];
    var agenumber=[];
    var agerange=[];
    var nation=[];
    var job=[];
    var risk=[];
    var pat=[];
    var province=[];
    var patid=[];

    const response = await fetch(getdata);
    const data = await response.text();
    const table  = data.split('\n').splice(1);
    var i = 0;
    
    table.forEach(row=>{
        
        var column=row.split(',')
        
        var patidtb=column[1];
        var sextb=column[2];
        var agetb=column[3];
        var provincetb=column[9];
        var nationtb=column[5];
        var risktb=column[7];
        var pattb=column[8];
        

        if (search==provincetb){
            //i++
            //if (i<10){
                document.getElementById("tabledata").innerHTML+= `<tr>
                <td class="text-left">${patidtb}</td>
                <td class="text-left">${sextb}</td>
                <td class="text-left">${agetb}</td>
                <td class="text-left">${provincetb}</td>
                <td class="text-left">${nationtb}</td>
                <td class="text-left">${risktb}</td>
                <td  class="text-left">${pattb}</td>
                </tr>`
                console.log(patidtb,sextb,agetb,provincetb,nationtb,risktb,pattb);
                
            //}
        }
    })



}

}




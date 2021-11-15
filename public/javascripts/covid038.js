function datesearch(){
    document.getElementById("tabledata").innerHTML=`<tr>
    <th class="text-left">ลำดับ</th>
    <th class="text-left">เพศ</th>
    <th class="text-left">อายุ</th>
    <th class="text-left">อาชีพ</th>
    <th class="text-left">จังหวัด</th>
    <th class="text-left">ประเทศ</th>
    <th class="text-left">ความเสี่ยง</th>
    <th  class="text-left">สาเหตุการติดเชื้อ</th>
    </tr> `;
    var search = document.getElementById("birthday").value;
    console.log(search);
    const getdata =  `https://covid19.ddc.moph.go.th/api/Cases/round-1to2-line-lists`;
    
    showdata();
    async function showdata(){
        const response = await fetch(getdata);
        const data = await response.text();
        console.log(data);
        const table  = data.split('\n').splice(1);
        table.forEach(row=>{
            var column=row.split(',')
            console.log(column);

            var dateid=column[0];
            var patid=column[1];
            var genderid=column[2];
            var ageid=column[3];
            var jobid=column[6];
            var proid=column[9];
            var naid=column[5];
            var riskid=column[7];
            var whyid=column[8];

            if (search==dateid){
                document.getElementById("tabledata").innerHTML+= `<tr>
                <td class="text-left">${patid}</td>
                <td class="text-left">${genderid}</td>
                <td class="text-left">${ageid}</td>
                <td class="text-left">${jobid}</td>
                <td class="text-left">${proid}</td>
                <td class="text-left">${naid}</td>
                <td  class="text-left">${riskid}</td>
                <td  class="text-left">${whyid}</td>
                </tr>`

            }



            
        


    })


}
}
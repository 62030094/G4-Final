function dateSearch(){
    document.getElementById("tabledata").innerHTML=`<tr class="head">
    <th scope="col"><b>&nbsp;ลำดับ&nbsp;</b></th>
    <th scope="col" colspan="2">&nbsp;เพศ&nbsp;</th>
    <th scope="col">&nbsp;อายุ&nbsp;</th>
    <th scope="col">&nbsp;ช่วงอายุ&nbsp;</th>
    <th scope="col">&nbsp;เชื้อชาติ&nbsp;</th>
    <th scope="col">&nbsp;อาชีพ&nbsp;</th>
    <th scope="col">&nbsp;สาเหตุความเสี่ยง&nbsp;</th>
    <th scope="col">&nbsp;ประเภทผู้ป่วย&nbsp;</th>
    <th scope="col">&nbsp;จังหวัด&nbsp;</th>
    <th scope="col">&nbsp;วันที่อัพเดท&nbsp;</th>
  </tr>`;

    var search = document.getElementById("inputdate").value;
    console.log(search);
    const getdata = ("https://covid19.ddc.moph.go.th/api/Cases/round-3-line-lists");
    showdata();

async function showdata(){
    const response = await fetch(getdata);
    const data = await response.json();


    var dateId  = data.data;
    console.log(dateId)

    var itemData = dateId.filter(itemData => itemData.txn_date == search);

    console.log(itemData)

    for (var i=0;i<itemData.length-1;i++)
    {
        var sexTd = itemData[i].gender;
        var ageTd = itemData[i].age_number;
        var ageRangeTd = itemData[i].age_range;
        var nationTd = itemData[i].nationality;
        var jobTd = itemData[i].job;
        var riskTd = itemData[i].risk;
        var patientTd = itemData[i].patient_type;
        var provinceTd = itemData[i].province;
        var updateTxnTd = itemData[i].update_date;

        document.getElementById("tabledata").innerHTML += `<tr>
        <th scope="row">${i+1}</th>
        <td colspan="2" id="province2">${sexTd}</td>
        <td>${ageTd}</td>
        <td>${ageRangeTd}</td>
        <td>${nationTd}</td>
        <td>${jobTd}</td>
        <td>${riskTd}</td>
        <td>${patientTd}</td>
        <td>${provinceTd}</td>
        <td>${updateTxnTd}</td>
      </tr>`
    }
    
        // var sextb=column[2];
        // var agetb=column[3];
        // var provincetb=column[9];
        // var nationtb=column[5];
        // var risktb=column[7];
        // var pattb=column[8];

      //   document.getElementById("tabledata").innerHTML+= `<tr>
      //   <th scope="row">${i+1}</th>
      //   <td colspan="2" id="province2">&nbsp;Mark&nbsp;</td>
      //   <td>&nbsp;Otto&nbsp;</td>
      //   <td>&nbsp;@mdo&nbsp;</td>
      //   <td>&nbsp;Mark&nbsp;</td>
      //   <td>&nbsp;Otto&nbsp;</td>
      //   <td>&nbsp;@mdo&nbsp;</td>
      //   <td>&nbsp;@mdo&nbsp;</td>
      //   <td>&nbsp;@mdo&nbsp;</td>
      //   <td>&nbsp;@mdo&nbsp;</td>
      // </tr>`
    }


}


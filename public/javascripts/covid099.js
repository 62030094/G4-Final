function dateSearch(){
    document.getElementById("tabledata").innerHTML=`<tr class="head">
    <th>ลำดับ</th>
    <th>เพศ</th>
    <th>อายุ</th>
    <th>เชื้อชาติ</th>
    <th>อาชีพ</th>
    <th>สาเหตุความเสี่ยง</th>
    <th>ประเภทผู้ป่วย</th>
    <th>จังหวัด</th>
  </tr>`;

    var search = document.getElementById("inputdate").value;
    var provinceTH = document.getElementById("provinceTH").value;
    console.log(search);
    const getdata = ("https://covid19.ddc.moph.go.th/api/Cases/round-3-line-lists");
    showdata();

async function showdata(){
    const response = await fetch(getdata);
    const data = await response.json();

    var dateId  = data.data;
    console.log(dateId)

    if (provinceTH != "")
    {
      var itemData = dateId.filter(itemData => itemData.txn_date == search && itemData.province == provinceTH);
    }else var itemData = dateId.filter(itemData => itemData.txn_date == search);
    

    console.log(itemData)

    if (itemData.length!=0)
    {
      for (var i=0;i<itemData.length;i++)
      {
        var sexTd = itemData[i].gender;
        var ageTd = itemData[i].age_number;
        var nationTd = itemData[i].nationality;
        var jobTd = itemData[i].job;
        var riskTd = itemData[i].risk;
        var patientTd = itemData[i].patient_type;
        var provinceTd = itemData[i].province;

        document.getElementById("tabledata").innerHTML += `<tr>
        <th scope="row">${i+1}</th>
          <td>${sexTd}</td>
          <td>${ageTd}</td>
          <td>${nationTd}</td>
          <td>${jobTd}</td>
          <td>${riskTd}</td>
          <td>${patientTd}</td>
          <td>${provinceTd}</td>
      </tr>`
        document.getElementById("dontFind").style.visibility = "hidden";
      }
    }else {document.getElementById("dontFind").style.visibility = "visible";}
  }
}


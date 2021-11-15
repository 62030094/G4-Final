let covid19data = [];
document.getElementById('main').style.visibility = "hidden";


async function getapi() {

    // ดึงข้อมูลจาก api covid19 ลิ้งที่ 9
    const response = await fetch("https://covid19.ddc.moph.go.th/api/Cases/round-1to2-by-provinces");

    // แปลงข้อฒุลให้อยู่รูปแบบ json
    const data = await response.json();


    console.log(data);

    // นำข้อมูลมาใส่ในตัวแปล
    covid19data = data;

    // ให้แสดงหน้าหลัก
    document.getElementById('main').style.visibility = "visible";

     // ให้ซ่อนปุ่ม relode
     document.getElementById('relodedata').style.visibility = "hidden";
}

getapi();

// ฟั่งชั่นเมื่อปุ่มถูกคลิ็ก 
function myFunction() {
    // อ่านข้อมูลวันที่
    let birthday = document.getElementById("birthday").value;

    // อ่านข้อมูลจังหวัด
    let provinceTH = document.getElementById("provinceTH").value;
    console.log(birthday);
    console.log(provinceTH);


    // ค้นข้อมูลที่ตรงกับ วันที่และ จังหวัด ในตัวแปร covid19data
    let searchcovid19data = covid19data.find((tree) => {
        if (tree.txn_date === birthday && tree.province === provinceTH) return true;
    })

    console.log(searchcovid19data);

    // แสดงผลข้อมูลที่หน้าเว็บไซน์
    document.getElementById('txn_date').innerHTML = searchcovid19data.txn_date;
    document.getElementById('new_case').innerHTML = searchcovid19data.new_case;
    document.getElementById('new_death').innerHTML = searchcovid19data.new_death;
    document.getElementById('total_case').innerHTML = searchcovid19data.total_case;
    document.getElementById('total_case_excludeabroad').innerHTML = searchcovid19data.total_case_excludeabroad;
    document.getElementById('total_death').innerHTML = searchcovid19data.total_death;

}
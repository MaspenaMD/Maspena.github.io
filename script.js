/*Profil atas */
    /* When the user clicks on the button, 
    toggle between hiding and showing the dropdown content */
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
      
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
        if (!e.target.matches('.pf')) {
        var myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
          }
        }
    }
  
/*Baca Selengkapnya*/

//Tampilkan modal popup
const viewBtn = document.querySelector(".read1"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close");
back = popup.querySelector(".back");

viewBtn.onclick = ()=>{
  popup.classList.toggle("show");
}
close.onclick = ()=>{
  viewBtn.click();
}
back.onclick = () => {
    close.click();
}
// value paragraf
var p1 = 'Kalian tentu pernah atau bahkan sering melihat seorang anak kisaran usia 4-10 tahun bermain dan berbicara dengan satu bahkan lebih orang padahal anak itu sadar bahwa dia sendirian tanpa ada seorangpun bersamanya, tentunya kalian mungkin berada di posisi tersebut ketika seumuran anak tersebut. Dengan pola tingkah ';
var p2 = 'laku kita yang polos bersamaan dengan imajinasi yang liar kita mampu menciptakan taman dan juga teman imajinasi untuk bermain. Kemudian semua itu perlahan pudar lalu menghilang seiring bertambahnya usia, luasnya logika dan ilmu pengetahuan, serta yang paling utama adalah banyaknya aktivitas kegiatan sosial yang kita lakukan bersama orang-orang terdekat dan <i>nyata</i>.<br><br>Namun hal itu tidaklah berlaku bagi saya (MASDONO) yang meski hampir di kepala dua tetapi masih sering bermain dengan sesosok teman imajinasi, namanya MASPENA. Dia muncul seketika kala saya merasa kesendirian dan kesedihan yang mendalam, mengajak saya ke berbagai tempat imajinatif yang bahkan sebelumnya saya sendiri tidak pernah ada didalamnya. Dia yang menciptakan taman bermain untuk saya menghibur dan dan mengistirahatkan diri dari kesedihan yang berlarut hingga saya sudah bisa melupakan kesedihan tersebut. <b>Opto, Ergo Sum </b><i>saya memilih maka saya ada</i>, saya memilih untuk mempertahankannya karena saya menikmatinya. <br>'

document.getElementById('prt1').innerHTML = p1 + '...';
document.getElementById('prt1.2').innerHTML = p1;
document.querySelector('.more').innerHTML=p2;
document.getElementById('prt2').innerHTML=p1+' '+p2
// onklik
function klik(){
    alert("Hai maaf, Halaman project ini belum tersedia atau masih tahap pengerjaan, harap menunggu!")
}
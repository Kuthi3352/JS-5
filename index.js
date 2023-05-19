//bài 1
/**
 * input : điểm chuẩn, điểm 3 môn, khu vực, đối tượng.
 * 
 * proccess :
 * tính điểm uu tiên khu vực 
 * tính điểm uu tien đối tượng
 * tổng điểm: điểm 3 môn + Khuvuc + doituong
 * kết quả : tổng điểm >= điểm chuẩn và ko có mồn nào 0 => đậu
 * 
 * 
 * output :kết quả đậu hay rớt, tổng điểm
 
 */
function diemKhuVuc(area){
    if (area === "A") 
    return 2;
    if(area === "B")
    return 1;
    if(area === "C")
    return 0.5;
    
    return 0;
}
function diemDoiTuong(type){
    if(type === "1")
    return 2.5;
    if(type === "2")
    return 1.5;
    if(type === "3")
    return 1;
    
    return 0;
}
document.getElementById("btnSumit").onclick = function () {
var diemChuan = +document.getElementById("diemChuanInput").value;
var diemToan = +document.getElementById("diemToanInput").value;
var diemLy = +document.getElementById("diemLyInput").value;
var diemHoa = +document.getElementById("diemHoaInput").value;
var khuVuc = document.getElementById("khuVucInput").value;
var doiTuong = document.getElementById("khuVucInput").value;


var khuVucInput = diemKhuVuc(khuVuc) ;
var doiTuongInput = diemDoiTuong(doiTuong) ;
var total = diemToan + diemLy + diemHoa + khuVucInput + doiTuongInput ;
if(
    total >= diemChuan &&
    diemToan !== 0 &&
    diemLy !== 0 &&
    diemHoa !== 0 
){
    ketqua = "Đậu";
} else{
    ketqua = "Rớt";
}

document.getElementById("results").innerHTML = ketqua + total ;

};

//bài 2
/**
 * input
 * - nhập họ và tên ngdung
 * - nhập số KW
 * proccess :
 -* tính <= 50Kw đầu = 500 * soKw
 * 50 < soKw < 100 (650d/kw) => 50 * 500 + (soKw - 50) * 650
 * 100 < soKw < 200 (850d/kw) => 50 * 500 + 50 * 650
 * 200 < soKw < 350 ( 1100d/kw )
 * soKw > 350 (1300d/kw )
 * output
 * tính số kw
 */
document.getElementById("btnDien").onclick = function() {
var name = document.getElementById("nameInput").value;
var soKw = +document.getElementById("soKwInput").value;
var totalDien = 0 ;
if(soKw <= 50){
    totalDien = soKw * 500 ;
} else if (soKw <= 100) {
totalDien = 50 * 500 + (soKw - 50) * 650 ;
} else if( soKw <= 200 ) {
    totalDien = (50 * 500) + (50 * 650) + (soKw - 100) * 850 ;

} else if ( soKw <= 350 ){
    totalDien = (50 * 500) + (50 * 650) + (100 * 850) + (soKw - 200) * 1100 ;
} else {
    totalDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKw - 350) * 1300 ;
}

document.getElementById("resultsTen").innerHTML = "Họ tên :" +  name ;
document.getElementById("resultsDien").innerHTML = "Tiền điện :" +  totalDien ;


}

// bài 3
/**
 * input: nhập họ tên, tổng thu nhập, số người phụ thuộc
 * progress:
 * 
 * 
 * 
 * 
 * 
 * ouput : tính thuế thu nhập cá nhân
 */

document.getElementById("btnThue").onclick = function() {
    var ten = document.getElementById("tenInput").value;
    var thuNhap = document.getElementById("thuNhapInput").value;
    var soNguoi = document.getElementById("soNguoiInput").value;


if


}
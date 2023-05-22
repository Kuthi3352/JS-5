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
    var thuNhap = +document.getElementById("thuNhapInput").value;
    var soNguoi = document.getElementById("soNguoiInput").value;
var totalThue = 0 ;
var thuNhapChiuThue = thuNhap - 4e+6 - soNguoi * 1.6e+6 ;

if (thuNhap <= 6e+7){
    totalThue = thuNhapChiuThue * 0.05 ;
}else if(thuNhap <= 12e+7){
    totalThue = thuNhapChiuThue * 0.1 ;
}else if(thuNhap <= 21e+7){
    totalThue = thuNhapChiuThue * 0.15 ;
}else if(thuNhap <= 384e+6){
    totalThue = thuNhapChiuThue * 0.2 ;
}else if(thuNhap <= 624e+6){
    totalThue = thuNhapChiuThue * 0.25 ;
}else if(thuNhap <= 960e+6){
    totalThue = thuNhapChiuThue * 0.3 ;
}else{
    totalThue = thuNhapChiuThue * 0.35 ;
} 
document.getElementById("resultsThue").innerHTML = "Họ tên :" + ten + ";" + "Tiền thuế thu nhập cá nhân :" + totalThue + "VND"
}


// bài 4 
/**
 * input : nhập mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
 * progress:
 * //nhà dân
 * phí xử lí : 4.5
 * phi dichvu :20.5
 * phí kenh : 7.5/kenh
 * // doanh nghiep
 * phí xử lí : 15
 * phi dichvu : 70 cho 10 kết nối đầu, trên 10 mỗi kết nối thêm 5
 * phí kenh : 50/kenh
 * ouput : tính tiền cáp
 */
var phiXuLy = 0;
var phiDichVu = 0;
var phiKenh = 0;
var phiKetNoi = 0;
var tongTien = 0;

function genderChanged(obj) {

    if (obj.value === 'doanhNghiep') {
        document.getElementById('number').style.display = 'block';
    } else {
        document.getElementById('number').style.display = 'none';
    }
}

document.getElementById("btnCap").onclick = function () {
    var maKh = document.getElementById("maKhInput").value;
    var soKenh = +document.getElementById("soKenhInput").value;
    var soKetNoi = +document.getElementById("soKetNoiInput").value;
    var loaiDoanhNghiep = document.getElementById("loaiDoanhNghiep").value;

    if (loaiDoanhNghiep === 'doanhNghiep') {
        phiXuLy = 15;
        if(soKetNoi > 10){
            phiDichVu = 75 + (soKetNoi - 10) * 5;
        }else{
            phiDichVu = 75 ;
        }
        phiKenh = soKenh * 50
        tongTien = phiXuLy + phiDichVu + phiKenh;
    } else if (loaiDoanhNghiep === 'nhaDan') {
        phiXuLy = 4.5;
        phiDichVu = 20.5;
        phiKenh = soKenh * 7.5;
        tongTien = phiXuLy + phiDichVu + phiKenh;
    }

  document.getElementById("resultsCap").innerHTML = "Mã khách hàng :" + maKh + ";" + "Tiền cáp :$" + tongTien ;
}









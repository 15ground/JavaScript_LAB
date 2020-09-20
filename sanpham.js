function taoRaDoiTuongSP(hinhAnh, ten, giaGoc, phanTramGiamGia) {
    var sanPham = new Object();
    // B1: Gán thuộc tính cho đối tượng
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    // B2: Viết phương thức tính giá bán
    sanPham.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (100 - this.phanTramGiamGia) / 100;
        return giaBan;
    }
    // TODO: Tạo ra Object sanPham
    return sanPham;
}
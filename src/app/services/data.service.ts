import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface Sing{
  Id: string;
  Name: string;
  Singer: string;
  content: string;
  image: string;
  isSelected: boolean;
  audio: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sings=[
    {
        "Id": "1412134502",
        "Name": "Anh Còn Nợ Em",
        "Singer": "Quang Dũng",
        "content":"Anh còn nợ em, Công viên ghế đá,Công viên ghế đá, Lá đổ chiều mưa",
        "image": "assets/images/quangdung.jpg",
        "isSelected": false,
        "audio": 'assets/audio/bacphan.mp3'
    },
    {
        "Id": "1412134520",
        "Name": "Sóng gió",
        "Singer": "Jack_KTM",
        "content":"Hồng trần trên đôi cánh tay,Họa đời em trong phút giây,Từ ngày thơ ấy còn ngủ mơ đến khi em thờ ơ,Lòng người anh đâu có hay,Một ngày khi vỗ cánh bay,Từ người yêu hóa thành người dưng đến khi ta tự xưng à,Thương em bờ vai nhỏ nhoi,Đôi mắt hóa mây đêm,Thương sao mùi dạ lý hương,Vương vấn mãi bên thềm,Đời phiêu du cố tìm một người thật lòng,Dẫu trời mênh mông anh nhớ em,Chim kia về vẫn có đôi,Sao chẳng số phu thê?,Em ơi đừng xa cách tôi,Trăng cố níu em về,Bình yên trên mái nhà,Nhìn đời ngược dòng,Em còn bên anh có phải không?,Trời ban ánh sáng, năm tháng tư bề",
        "image": "assets/images/jack.jpg",
        "isSelected": false,
        "audio": 'assets/audio/bacphan.mp3'
    },
    {
        "Id": "1412145502",
        "Name": "Cách Biệt",
        "Singer": "Đặng Thế Luân",
        "content":"Anh còn nợ em, Công viên ghế đá,Công viên ghế đá, Lá đổ chiều mưa",
        "image": "assets/images/dangtheluan.jpg",
        "isSelected": false,
        "audio": 'assets/audio/songgio.mp3'
    },   
    {
        "Id": "1412144501",
        "Name": "Gặp Nhau Trong Rùng Mơ",
        "Singer": "Trọng Tấn, Tân Nhàn",
        "content":"Anh còn nợ em,Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
        "image": "assets/images/trongtan_tannhan.jpg",
        "isSelected": false,
        "audio": 'assets/audio/bacphan.mp3'
    },
    {
        "Id": "1412143332",
        "Name": "Đáp Mộ Cuộc Tình",
        "Singer": "Đan Nguyên",
        "content":"Anh còn nợ em, Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
        "image": "assets/images/dannguyen.jpg",
        "isSelected": false,
        "audio": 'assets/audio/hongnhan.mp3'
    },
    {
      "Id": "1412143331",
      "Name": "Đúng Người Đúng Thời Điểm",
      "Singer": "Thanh Hưng",
      "content":"Anh còn nợ em, Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
      "image": "assets/images/thanhhung.jpg",
      "isSelected": false,
      "audio": 'assets/audio/dndtd.mp3'
  }
];

  constructor() { }

  getSings(): Sing[]{
    return this.sings
  }
}

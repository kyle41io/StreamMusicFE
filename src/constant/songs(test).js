import jaykii from "@/assets/images/SongImg/chieu_hom_ay.jpeg";
import andiez from "@/assets/images/SongImg/cho_doi_co_dang_so.jpeg";
import kuun from "@/assets/images/SongImg/tinh_co_yeu_em.jpeg";
import tuanhung from "@/assets/images/SongImg/gap_doi_yeu_thuong.jpeg";

import anhLaAi from "@/assets/images/SongImg/anh_la_ai.jpeg";
import anhLaNgoaiLe from "@/assets/images/SongImg/anh_la_ngoai_le.jpeg";
import chayKhoiTheGioi from "@/assets/images/SongImg/chay_khoi_the_gioi.jpeg";
import thichThich from "@/assets/images/SongImg/thich_thich.jpeg";

export const tracks = [
  {
    id: 0,
    songName: "Chiều hôm ấy",
    singer: "Jaykii",
    path: "/Music/ChieuHomAy-JayKii.mp3",
    image: jaykii.src,
  },
  {
    id: 1,
    songName: "Chờ đợi có đáng sợ",
    singer: "Andiez",
    path: "/Music/ChoDoiCoDangSo-Andiez.mp3",
    image: andiez.src,
  },
  {
    id: 2,
    songName: "Tình cờ yêu em",
    singer: "Kuun Đức Nam",
    path: "/Music/TinhCoYeuEm-KuunDucNam.mp3",
    image: kuun.src,
  },
  {
    id: 3,
    songName: "Gấp đôi yêu thương",
    singer: "Tuấn Hưng",
    path: "/Music/GapDoiYeuThuong-TuanHung.mp3",
    image: tuanhung.src,
  },
];

export const playlists_PhuongLy = [
  {
    id: 0,
    songName: "Anh là ai",
    singer: "Phương Ly",
    path: "/Music/AnhLaAi-PhuongLy.mp3",
    image: anhLaAi.src,
  },
  {
    id: 1,
    songName: "Anh là ngoại lệ của em",
    singer: "Phương Ly",
    path: "/Music/AnhLaNgoaiLeCuaEm-PhuongLy.mp3",
    image: anhLaNgoaiLe.src,
  },
  {
    id: 2,
    songName: "Chạy khỏi thế giới này",
    singer: "DaLab ft. Phương Ly",
    path: "/Music/ChayKhoiTheGioiNay-DaLABPhuongLy.mp3",
    image: chayKhoiTheGioi.src,
  },
  {
    id: 3,
    songName: "Thích thích",
    singer: "Phương Ly",
    path: "/Music/Thichthich-PhuongLy.mp3",
    image: thichThich.src,
  },
];

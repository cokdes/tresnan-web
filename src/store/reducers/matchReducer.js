const initState = {
    pancawaras: [
        {id: '1', dewata : "Sanghyang Iswara", hari : "Umanis", letak : "Timur", urip : 5},
        {id: '2', dewata: "Sanghyang Brahma", hari: "Paing", letak: "Selatan", urip: 9},
        {id: '3', dewata: "Sanghyang Mahadewa", hari: "Pon", letak: "Barat", urip: 7},
        {id: '4', dewata: "Sanghyang Wisnu", hari: "Wage", letak: "Utara", urip: 4},
        {id: '5', dewata: "Sanghyang Çiwa", hari: "Kliwon", letak: "Tengah", urip: 8},
    ],
    saptawaras: [
        {id: '1', dewata: "Sanghyang Baskara", hari: "Redite (Minggu)", letak: "Timur", urip: 5},
        {id: '2', dewata: "Sanghyang Chandra", hari: "Soma (Senin)", letak: "Utara", urip: 4},
        {id: '3', dewata: "Sanghyang Angkara", hari: "Anggara (Selasa)", letak: "Barat Daya", urip: 3},
        {id: '4', dewata: "Sanghyang Udaka", hari: "Buda (Rabu)", letak: "Barat", urip: 7},
        {id: '5', dewata: "Sanghyang Sukra Guru", hari: "Wrespati (Kamis)", letak: "Tenggara", urip: 8},
        {id: '6', dewata: "Sanghyang Bregu", hari: "Sukra (Jumat)", letak: "Timur Laut", urip: 6},
        {id: '7', dewata: "Sanghyang Wasu", hari: "Saniscara (Sabtu)", letak: "Selatan", urip: 9}        
    ],
    sadwaras: [
        {id: '1', dewata: "Sanghyang Indra", hari: "Tungleh", letak: "Barat", urip: 7}, 
        {id: '2', dewata: "Sanghyang Baruna", hari: "Aryang", letak: "Timur Laut", urip: 6},
        {id: '3', dewata: "Sanghyang Kuwera", hari: "Urukung", letak: "Timur", urip: 5},
        {id: '4', dewata: "Sanghyang Bayu", hari: "Paniron", letak: "Tenggara", urip: 8},
        {id: '5', dewata: "Sanghyang Bajra", hari: "Was", letak: "Selatan", urip: 9},
        {id: '6', dewata: "Sanghyang Erawan", hari: "Maulu", letak: "Barat Daya", urip: 3 }
    ],
    patemon16s: [
        {id: "1", nama: "Ala-ayu, Panes-tis", tingkat: "sedang", arti: " artinya suka duka, baik buruk, selalu mengalami perubahan, harus tahan uji."},
        {id: "2", nama: "Durlaba Sai-sai kewuh mengangkuhang awak", tingkat: "buruk", arti: " artinya selalu menghadapi kesulitan dalam mengatur rumah tangga."},
        {id: "3", nama: "Wirang", tingkat: "buruk", arti: " artinya selalu dalam keadaan kecewa"},
        {id: "4", nama: "Pianake mati", tingkat: "buruk", arti: " artinya sulit mendapatkan keturunan (anak-anak meninggal)"},
        {id: "5", nama: "Doyan seger lanus-lanus dadi matinggenan masakaya, mandrisdis", tingkat: "baik sekali", arti: " artinya kesehatannya baik selalu penghasilannya meningkat, hidup rukun dan bahagia."},
        {id: "6", nama: "Kamranan", tingkat: "buruk", arti: " artinya penderitaan, sakit-sakitan."},
        {id: "7", nama: "Suka-duka makelo-kelo ya numadi", tingkat: "sedang", arti: " artinya suka duka lama kelamaan bisa meningkat penghasilannya (usahanya)."},
        {id: "8", nama: "Doyan terak", tingkat: "buruk", arti: " artinya selalu kekurangan."},
        {id: "9", nama: "Sakite tong ada tuna sai-sai, sahidupe tuah sangsara", tingkat: "buruk sekali", arti: " artinya hampir setiap hari kesakitan, selamanya menderita."},
        {id: "10", nama: "Bikas ratune pinanggih", tingkat: "baik", arti: " artinya dapat mengayomi atau melindungi keluarga dan berwibawa, hidup berkecukupan."},
        {id: "11", nama: "Sebita", tingkat: "baik", arti: " artinya selalu ada, keadaan puas."},
        {id: "12", nama: "Sedana tutus", tingkat: "baik", arti: " artinya murah rezeki dan hidup rukun."},
        {id: "13", nama: "Agung lama", tingkat: "baik", arti: " artinya selamanya tidak kurang harta (kaya) dan panjang umur."},
        {id: "14", nama: "Dahating bagia", tingkat: "baik sekali", arti: " artinya hidup tenang dan bahagia."},
        {id: "15", nama: "Dahating ala", tingkat: "buruk sekali", arti: " artinya sangat buruk hidupnya dan mandul."},
        {id: "16", nama: "Bagia kapanggih", tingkat: "baik", arti: " artinya hidup rukun dan memperoleh kebahagiaan."}
    ]
}

const matchReducer = (state=initState, action) => {
    return state
}

export default matchReducer
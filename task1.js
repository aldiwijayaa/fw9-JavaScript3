const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

cekHariKerja("senin")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// then adalah tempat atau wadah untuk menampung nilai resolve dari semua promise
// catch adalah tempat atau wadah untuk menampung nilai reject atau error ketika promise tidak dapat diselesaikan

async function day() {
  try {
    const hasilCekHari = await cekHariKerja("selasa");
    console.log(hasilCekHari);
  } catch (error) {
    console.log(error);
  }
}
day();
// try mendefinisikan blok kode untuk dijalankan (untuk mencoba).
// catch tersebut mendefinisikan blok kode untuk menangani kesalahan apa pun.

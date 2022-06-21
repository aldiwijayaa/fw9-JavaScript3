const cekNamaProvinsi = (prov) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataProvinsi = [
        "JawaBarat",
        "JawaTengah",
        "Sumatra",
        "Kalimantan",
        "Papua",
      ];
      let filter = dataProvinsi.find((data) => {
        return data === prov;
      });
      if (filter) {
        resolve(filter);
      } else {
        reject(new Error("Ini Bukan Nama Provinsi"));
      }
    }, 1000);
  });
};
async function prov() {
  try {
    const hasilProvinsi = await cekNamaProvinsi("JawaBarat");
    console.log(hasilProvinsi + " Merupakan Nama Provinsi");
  } catch (error) {
    console.log(error);
  }
}
prov();

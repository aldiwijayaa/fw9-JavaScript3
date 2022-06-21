const cekMerekHp = (hp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataHp = ["vivo", "oppo", "i phone", "esia", "huawei", "samsung"];
      let filter = dataHp.find((item) => {
        return item === hp;
      });
      if (filter) {
        resolve(filter);
      } else {
        reject(new Error("Bukan merupakan merek HandPhone"));
      }
    }, 1000);
  });
};

cekMerekHp("samsung")
  .then((res) => console.log(res + " adalah Merek HandPhone"))
  .catch((err) => console.log(err));

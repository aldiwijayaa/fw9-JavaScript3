const getMonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = [
      "januari",
      "februari",
      "maret",
      "april",
      "mei",
      "juni",
      "july",
      "agustus",
      "september",
      "oktober",
      "november",
      "desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 2000);
};

const showMonth = (month) => {
  month((err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      data.map((show) => {
        console.log(show);
      });
    }
  });
};
showMonth(getMonth);

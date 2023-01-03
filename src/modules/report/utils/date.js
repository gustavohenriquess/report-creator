const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const dateHelper = {
  getMonthName: (number) => {
    if (number == -1) number = 11;

    return months[number];
  },
  getYear: (month, year) => {
    if (month == -1) return year - 1;

    return year;
  },
};

module.exports = dateHelper;

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDate = () => {
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() + daysGap);

  const temp = new Date(currentDate);
  return temp;
};

const descriptions = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

// const dueDates = [`20.08.2020`, `21.08.2020`, `22.08.2020`, `23.08.2020`, `24.08.2020`, `25.08.2020`];
// const repeatingDaysMock = {
//   'mo': false,
//   'tu': false,
//   'we': false,
//   'th': false,
//   'fr': false,
//   'sa': false,
//   'su': false,
// };

// const createRepDays = () => {
//   const keys = Object.keys(repeatingDaysMock);
//   for (const propertyName of keys) {
//     repeatingDaysMock[propertyName] = Math.random > 0.5 ? true : false;
//   }
//   return repeatingDaysMock;
// };

const createRepDays = () => {
  return {
    'mo': false,
    'tu': false,
    'we': Boolean(Math.round(Math.random())),
    'th': false,
    'fr': Math.random() > 0.5 ? true : false,
    'sa': false,
    'su': false,
  };
};

// 'we': Math.round(Math.random()),
// Math.random() > 0.5 ? true : false,

const now = new Date();
const sevenDays = new Date(604800000);
const day = new Date(now - sevenDays);

export const createMockObject = function () {
  const dueDate = generateDate();
  return {
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    repeatingDays: createRepDays(),
    dueDate,
    color: colors[Math.floor(Math.random() * colors.length)],
    isFavorite: (Math.random > 0.5) ? true : false,
    isArchive: Math.random > 0.5 ? true : false,
  };
};

// repeatingDays: repeatingDaysMock.map((item) => {
//   const days = [];
//   if (Math.random > 0.5) {
//     days.push(item);
//   }
//   return days;
// }),
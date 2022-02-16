import {randomFromRange} from "../utils.js";

const generateDescription = () => {
  const descriptions = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Проити интенсив`,
  ];

  const randomIndex = randomFromRange(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateDate = () => {
  const isDate = Boolean(randomFromRange(0, 1));
  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = randomFromRange(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};


const generateRepeating = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(randomFromRange(0, 1)),
    th: false,
    fr: Boolean(randomFromRange(0, 1)),
    sa: false,
    su: false,
  };
};

const getRandomColor = () => {
  const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
  const randomIndex = randomFromRange(0, colors.length - 1);

  return colors[randomIndex];
};


export const generateTask = () => {
  return {
    description: generateDescription(),
    dueDate: generateDate(),
    repeating: generateRepeating(),
    color: getRandomColor(),
    isArchive: Boolean(randomFromRange(0, 1)),
    isFavorite: Boolean(randomFromRange(0, 1)),
  };

};

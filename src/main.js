import {createSiteMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filters";
import {createBoardTemplate} from "./view/board";
import {createTaskTemplate} from "./view/task";
import {createTaskEditTemplate} from "./view/edit-task";
import {createLoadMoreButtonTemplate} from "./view/button-more";
import {createMockObject} from "./mock/mock";

const TASK_QUANTITY = 4;

const tasks = new Array(TASK_QUANTITY).fill().map(createMockObject);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

render(taskListElement, createTaskEditTemplate(tasks[0]), `beforeend`);
console.log(tasks[0].repeatingDays);
for (let i = 1; i < TASK_QUANTITY; i++) {
  console.log(tasks[i].repeatingDays);
  render(taskListElement, createTaskTemplate(tasks[i]), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

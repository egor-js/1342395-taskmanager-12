import SiteMenuView from "./view/menu.js";
import {createFilterTemplate} from "./view/filters";
import {createBoardTemplate} from "./view/board";
import {createTaskTemplate} from "./view/task";
import {createTaskEditTemplate} from "./view/edit-task";
import {createLoadMoreButtonTemplate} from "./view/button-more";
import {generateTask} from "./mock/task.js";
import {renderTemplate, rendereElement, RenderPosition} from "./utils.js";

const TASK_QUANTITY = 9;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

rendereElement(siteHeaderElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilterTemplate(), `beforeend`);
renderTemplate(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = boardElement.querySelector(`.board__tasks`);

renderTemplate(taskListElement, createTaskEditTemplate(), `beforeend`);


for (let i = 0; i < TASK_QUANTITY; i++) {
  const task = generateTask();
  renderTemplate(taskListElement, createTaskTemplate(task), `beforeend`);
}

renderTemplate(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

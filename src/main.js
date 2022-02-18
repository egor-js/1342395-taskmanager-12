import SiteMenuView from "./view/menu.js";
import ButtonMoreView from "./view/button-more.js";
import BoardView from "./view/board.js";
import SortView from "./view/sort.js";
import TasksListView from "./view/tasks-list.js";
import TaskView from "./view/task.js";
import TaskEditView from "./view/task-edit.js";
import FilterView from "./view/filter.js";
import {createBoardTemplate} from "./view/board";
import {generateTask} from "./mock/task.js";
import {generateFilter} from "./mock/filter.js";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";

const TASK_QUANTITY = 12;
const TASK_COUNT_PER_STEP = 8;

const tasks = new Array(TASK_QUANTITY).fill().map(generateTask);
const filters = generateFilter(tasks);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

renderElement(siteHeaderElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);
renderElement(siteMainElement, new FilterView(filters).getElement(), RenderPosition.BEFOREEND);

const boardComponent = new BoardView();
renderElement(siteMainElement, boardComponent.getElement(), RenderPosition.BEFOREEND);
renderElement(boardComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);

const tasksListComponent = new TasksListView();
const taskEditelement = new TaskEditView(tasks[0]).getElement();
renderElement(tasksListComponent.getElement(), taskEditelement, RenderPosition.BEFOREEND);

renderElement(boardComponent.getElement(), tasksListComponent.getElement(), RenderPosition.BEFOREEND);

for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
  renderElement(tasksListComponent.getElement(), new TaskView(tasks[i]).getElement(), RenderPosition.BEFOREEND);
}

if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;

  const loadMoreButtonComponent = new ButtonMoreView();

  renderElement(boardComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, (evt) => {
    evt.preventDefault();
    tasks
    .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
    .forEach((task) => renderElement(tasksListComponent.getElement(), new TaskView(task).getElement(), RenderPosition.BEFOREEND));
    renderedTaskCount += TASK_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
} 

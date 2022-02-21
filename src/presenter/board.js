import BoardView from "./view/board.js";
import SortView from "./view/sort.js";
import TasksListView from "./view/tasks-list.js";
import NoTasksView from "./view/no-tasks.js";
import TaskView from "./view/task.js";
import TaskEditView from "./view/task-edit.js";
import ButtonMoreView from "./view/button-more.js";
import {render, RenderPosition} from "./utils/render.js";

export default class Board {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;

    this._boardComponent = new BoardView();
    this._sortComponent = new SortView();
    this._taskListComponent = new TasksListView();
    this._noTaskComponent = new NoTasksView();
  }

  init(boardTasks) {
    this._boardTasks = boardTasks.slice();

  }

  _renderSort() {
  }

  _renderTask() {
  }

  _renderTasks() {
  }

  _renderNoTasks() {
  }

  _renderLoadMoreButton() {
  }

  _renderBoard() {
  }
}

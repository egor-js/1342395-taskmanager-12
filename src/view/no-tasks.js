import AbstractView from "./abstract.js";

const createNoTasksTemplate = () => {
  return `<p class="board__no-tasks">
    Click «ADD NEW TASK» in menu to create your first task
  </p>`;
};

export default class NoTasks extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createNoTasksTemplate(this._filters);
  }
}

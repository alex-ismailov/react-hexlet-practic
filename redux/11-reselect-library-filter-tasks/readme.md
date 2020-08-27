## Библиотека Reselect

### src/components/Filter.jsx

Реализуйте компонент `<Filter />`, добавив в него логику фильтрации.

Логика включает в себя три состояния: *all*, *active*, *finished*.

### src/components/Tasks.jsx

Реализуйте функцию `mapStateToProps`.

### src/selectors/index.js

Реализуйте необходимые селекторы

HTML
Только фильтр:

```
<div class="mt-3 d-flex justify-content-around">
  All Tasks
  <button type="button" class="btn btn-link border-0 p-0" data-test="task-filter-active">Active Tasks</button>
  <button type="button" class="btn btn-link border-0 p-0" data-test="task-filter-finished">Finished Tasks</button>
</div>
```

При смене фильтра, в списке задач остается только то что ему соответствует. Пример верстки при выбранном фильтре `Active Tasks`:

```
<div class="mt-3 d-flex justify-content-around">
  <button type="button" class="btn btn-link border-0 p-0" data-test="task-filter-all">All Tasks</button>
  Active Tasks
  <button type="button" class="btn btn-link border-0 p-0" data-test="task-filter-finished">Finished Tasks</button>
</div>
```
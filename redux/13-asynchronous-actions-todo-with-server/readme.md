## Asynchronous actions

Реализуйте взаимодействие с бекендом для создания задач.

Доступные урлы описаны в файле `routes.js`

### src/actions/index.js
Реализуйте необходимые действия

### src/components/NewTaskForm.jsx
Реализуйте вывод формы и ее обработчик. Учтите следующие моменты:

* Поле для ввода должно быть заблокировано во время отправки формы.
* Кнопка должна быть заблокирована во время отправки и до начала каких-либо действий с формой.

Вам не нужно отслеживать эти состояния руками. Для этого `redux_form` передает соответствующие пропсы:
`
* submitting
* pristine

### src/index.jsx

Подключите мидлвару `thunk`.

### src/reducers/index.js

Добавьте редьюсер для отслеживания состояния удаления

HTML

Начальный вариант формы

```
<form class="form-inline">
  <div class="form-group mx-3">
    <input name="text" required="" type="text" value="">
  </div>
  <input type="submit" disabled="" class="btn btn-primary btn-sm" value="Add">
</form>
```

После ввода данных

```
<form class="form-inline">
  <div class="form-group mx-3">
    <input name="text" required="" type="text" value="new task">
  </div>
  <input type="submit" class="btn btn-primary btn-sm" value="Add">
</form>
```

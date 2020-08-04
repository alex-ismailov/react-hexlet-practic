## Asynchronous processing

## src/Autocomplete.jsx

Реализуйте компонент `<Autocomplete />`, который представляет собой текстовое поле с автодополнением списка стран. Автодополнение срабатывает только в том случае, если указан хотя бы один символ. Для пустого запроса ничего не выводится.

[basic example]: https://github.com/alex-ismailov/git-imgs/blob/master/basic%20example.png

Список стран можно получить сделав запрос:

```
const res = await axios.get('/countries', { params: { term: 'al' } });
console.log(res.data); // => ["Albania","Algeria"]
```

Где `term это начало слова (любое количество символов введенное пользователем)


Начальный HTML:

```
<div>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter Country">
    </div>
  </form>
</div>
```

HTML после выбора `"al"`:

```
<div>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter Country">
    </div>
  </form>
  <ul>
    <li>Albania</li>
    <li>Algeria</li>
  </ul>
</div>
```

##### Подсказки

В качестве `key` для элементов списка используйте название страны.

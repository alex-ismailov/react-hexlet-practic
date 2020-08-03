## Массив: удаление

Более интересный пример. Чтобы успешно выполнить удаление, нужно знать, что удалять. Это значит, что каждый элемент в коллекции должен иметь идентификатор. Для удаления используется старая добрая фильтрация.

`const newItems = items.filter(item => item.id !== id);`

Может возникнуть вопрос: откуда взялся идентификатор внутри обработчика? И здесь нам на помощь приходят замыкания.
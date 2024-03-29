# Trading App

## Task Reference

<!-- Place link here -->

## Used technologies

- React
- Redux
- TailwindCSS
- Jest & @testing-library
- WebSocket
- Feature-Sliced Design (в качестве архитектурной методологии)

## Short information

- Start Instruction

Для запуска фронта и сервера необходимо исполнить команды в двух терминалах:

```
npm start
npm run server
```

* Description
  - PurchaseList
  
    На главной странице выводится **таблица заявок**. Данные обновляются автоматически при получении новых с сервера. Большинство данных задано статически, поскольку они _не получаются_ с сервера. Для получения есть шаблоны, которые просто нужно расширить.
  - Ticker
  
    Для выставления заявки небходимо открыть **Тикер**. В нем выставить нужные данные и выбрать сторону: *покупку* или *продажу*.
  - WebSocket Connection

    В качестви API реализован класс **WSConnector**. Он производит установку соединения, получение и отправку данных. Сам класс содержит базовую реализацию, расширение функционало произведено через хуки.
  - Server
  
    Для проверки работы API был написан **тестовый сервер на NodeJS**. Может получать данные и делать *широковещательную рассылку*.

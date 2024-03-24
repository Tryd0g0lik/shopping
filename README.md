[![Build status](https://ci.appveyor.com/api/projects/status/am7vyx8sbywcqe1b/branch/master?svg=true)](https://ci.appveyor.com/project/Tryd0g0lik/shopping/branch/master)

## Run a frontend
`npm run server:front`

## Run the backend
`npm run watch`


## Приложение содержит следующие самостоятельные экраны (страницы):

 - Главная страница.
 - Каталог товаров.
 - Информационная страница.
 - Страница товара.
 - Корзина.
 - 404

## Переходы между экранами
 - логотип и ссылка «Главная» — ведут на главную страницу, URL — "/";
 - каталог — ведёт на страницу каталога, URL — "/catalog";
 - о магазине — ведёт на страницу «О магазине», URL — "/about";
 - контакты — ведёт на страницу «Контакты», URL — "/contacts".
 - Из футера можно попасть на следующие экраны:

 - о магазине — ведёт на страницу «О магазине», URL — "/about";
 - каталог — ведёт на страницу каталога, URL — "/catalog";
 - контакты — ведёт на страницу «Контакты», URL — "/contacts".

Экран «Главная страница» доступен по умолчанию при открытии приложения.

При загрузке любых данных с помощью сетевых запросов должен отображаться лоадер. \
У каждого виджета лоадер свой, то есть у вас не должно быть одного лоадера на всё приложение.

### Вам нужно реализовать:

 - Хиты продаж — GET http://localhost:7070/api/top-sales. В ответ приходит JSON, содержащий данные. Вам необходимо его распарсить и вывести элементы. Если в ответе пришёл пустой массив, то есть хитов продаж нет, то компонент не должен ничего отображать, как и не должен занимать места на экране.

 - Категории каталога — GET http://localhost:7070/api/categories. В ответ приходит массив категорий без элемента «Все», его вы должны добавить сами. По умолчанию выбранный элемент служит для определения того, какие будут загружаться товары из каталога. Если «Все» — загружаются все, если «Женская обувь» — загружается только женская обувь. Активный элемент выделен. При смене категории делается новый запрос, предыдущие загруженные данные удаляются.

 - Элементы каталога — GET http://localhost:7070/api/items для варианта «Все». При другой выбранной категории вы делаете запрос вида GET http://localhost:7070/api/items?categoryId=X. Возвращается массив элементов, соответствующих вашему запросу.

 - Загрузить ещё — при запросе элементов каталога загружаются следующие 6. При нажатии на «Загрузить ещё» загружаются ещё 6: GET http://localhost:7070/api/items?offset=6, где offset определяет, сколько элементов пропустить. Если сервер вернул пустой массив или меньше 6 элементов, то кнопка «Загрузить ещё» должна исчезнуть. На время загрузки над кнопкой также показывается лоадер, сама кнопка отключается.

 При загрузке по кнопке «Ещё» должна учитываться выбранная категория: то есть если выбрана категория «Женская обувь», то при нажатии на «Ещё» делается запрос GET http://localhost:7070/api/
 items?categoryId=X&offset=6 и т. д.

## Каталог товаров
Фактически он полностью повторяет функциональность каталога на главной странице, за одним исключением: у него есть поле поиска.

При заполнении этого поля отправляется запрос вида: GET http://localhost:7070/api/items?q=<текст в строке поиска>. \
При этом все правила относительно категории кнопки «Загрузить ещё» сохраняются.

Если категория меняется, то данные перезагружаются с учётом строки поиска.

Строка поиска реагирует только на полный ввод, не live-поиск.

## На всех страницах в шапке присутствует виджет поиска:
По умолчанию поисковое поле скрыто, отображается только иконка/

Эта иконка должна работать следующим образом: при первом клике открывает строку поиска, при втором, если был введён какой-то текст, то перенаправляет пользователя на страницу каталога (/catalog.html), при этом в поисковом поле должен быть отображён тот же текст, что был ввёден в строку поиска в шапке, и загрузка данных должна происходить исходя из этого:

Поиск на сервере работает по точному совпадению цвета без учёта регистра, например, «чёрный», и по содержанию слова для названия без учёта регистра, например, можно найти «жар» в «Туфли Жар-птицы».

Если пользователь не ввёл никакой текст, то строка поиска просто схлопывается обратно, как сейчас реализовано в html.

## О магазине, контакты
Это просто контентные страницы, в которые жёстко зашит контент. Никакой логики, кроме работы виджета поиска и ссылок, там нет.

## Страница товара
Страница товара выглядит следующим образом:

Страница открывается при нажатии кнопок «Заказать» в карточках товаров. URL — /catalog/:id. Где id — это ID товара.

На ней интерес представляет только блок самого товара.
Ключевые моменты:

При загрузке показывается лоадер.
- Для загрузки полной информации о товаре нужно сделать GET http://localhost:7070/api/items/:id, где id — это ID товара.
- Слева выводится картинка, в ответе может быть несколько картинок — вы берёте первую.
- Сбоку выводится табличка с данными, все необходимые данные перечислены. Других не нужно. Если каких-то в приходящем товаре не будет, то просто оставляете поле пустым.
- Размеры — выводятся все доступные размеры, у которых флаг available равен true. По умолчанию ни один размер не выбран. После выбора он становится выделенным, как на скриншоте. Важно: кнопка «В корзину» активируется только тогда, когда есть размеры в наличии и выбран конкретный размер. Размер можно выбрать только один.
- Количество — от 1 до 10.
- Особые случаи: если ни одного размера не доступно, блок «Количество» и кнопка «В корзину» не отображаются.
- После нажатия на кнопку «В корзину» пользователь перемещается в страницу корзины /cart.html.

## Страница корзины
Блок «Корзина» отображает товары, находящиеся в корзине. Все товары хранятся локально в localStorage. Товар можно удалить из корзины, тогда он должен удалиться и из localStorage тоже.

Одной позицией считается пара — товар + размер. То есть если купить те же босоножки другого размера, то это будет две позиции в корзине. А если два раза купить босоножки того же размера, то изменится количество и общая стоимость, но запись останется в табличке одна.

Важно: стоимость должна фиксироваться при покупке, то есть вы кладёте в localStorage именно ту стоимость за единицу, которая была в тот момент, когда пользователь нажал «В корзину».

Общая сумма рассчитывается на базе суммирования всех позиций при отображении.

Соответственно, виджет корзинки отображает количество позиций в корзине

Если в корзине товаров нет вообще, то розового индикатора с числом тоже быть не должно.

Блок оформления заказа позволяет оформить заказ — POST http://localhost:7070/api/order.

В теле — JSON:
```JSON
{
  "owner": {
    "phone": "+7xxxxxxxxxxx",
    "address": "Moscow City",
  },
  "items": [
    {
      "id": 1,
      "price": 34000,
      "count": 1
    }
  ]
}
```
После успешного оформления заказа все данные корзины должны быть вычищены из state и из localStorage.

Не забудьте показать пользователю loader и сообщение об успехе.

## 404
При вводе несуществующего URL, не соответствующего ни одному из путей, пользователю должна показываться страница 404.html.

Дополнительно, но не обязательно вы можете обрабатывать ошибку 404 при просмотре деталей товара, то есть сервер вернул вам ответ с кодом 404.

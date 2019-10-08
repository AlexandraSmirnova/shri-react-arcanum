# shri-react-arcanum

React приложение, которое показывает структуру файлов и директорий репозитория.


## Сборка и запуск

### Сборка приложения
```
yarn
yarn build:server
yarn build:client
```

### Запуск приложения
``` 
yarn start:server
```
Приложение запустится на порту localhost:3030

### Запуск сервера с api
Отдельно нужно будет еще запустить сервер с api:
```
git clone git@github.com:AlexandraSmirnova/shri-nodejs.git
yarn
yarn start <path_to_dir>
```
В <path_to_dir> нужно указать абсолютный путь до директории с репозиториями.
Сервер с api запустится на порту localhost:3000




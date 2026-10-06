# Використання

## Запуск головного оркестратора

У VS Code відкрийте репозиторій і викличте prompt `init` з `.github/prompts/init.prompt.md`. Оркестратор послідовно виконає:

`git-init -> create-project -> create-build -> create-actions -> check`

Після кожного кроку потрібно підтвердити результат. При першій помилці виконання зупиняється.

## Локальні перевірки

Після генерації проєкту встановіть залежності:

```sh
npm ci
```

Для перевірки тестів:

```sh
npm test -- --runInBand
```

Для coverage:

```sh
npm run test:coverage
```

Для build:

```sh
npm run build
```

Для запуску застосунку:

```sh
npm start
```

Локальний CI можна запустити так:

- Linux/macOS або Git Bash: `sh ci.sh`
- Windows CMD: `ci.bat`

Перевірка не повинна додавати до Git `node_modules/`, `coverage/`, секрети чи тимчасові файли. Workflow GitHub Actions запускає той самий набір перевірок на `ubuntu-latest`, `windows-latest` і `macos-latest`.

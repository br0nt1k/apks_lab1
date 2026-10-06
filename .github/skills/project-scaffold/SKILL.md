---
name: project-scaffold
description: "Use when scaffolding a JavaScript npm project with package.json, src/index.js, .gitignore, and README."
---

# Project Scaffold

## Purpose

Створити мінімальний відтворюваний JavaScript-проєкт на npm без зайвих залежностей і з чіткими точками входу для build та start.

## Inputs

- Коренева директорія репозиторію.
- Назва пакета та версія Node.js, якщо їх задав користувач.
- Узгоджені npm scripts для `start`, `build` і `test`.

## Outputs

- `package.json` з метаданими та npm scripts.
- `src/index.js` з мінімальною runnable-точкою входу.
- `.gitignore` із правилами для залежностей, coverage, логів, секретів і тимчасових файлів.
- `README.md` з командами встановлення та запуску.

## Verification

1. Перевірити, що `package.json` є валідним JSON.
2. Виконати `npm install` або `npm ci`, якщо існує lockfile.
3. Запустити `npm start` і переконатися, що процес стартує коректно.
4. Запустити `npm run build`.
5. Перевірити, що `.gitignore` містить `node_modules/` і `coverage/`.

## Error Handling

- Не перезаписувати наявні файли без перевірки та згоди користувача.
- Якщо Node.js або npm недоступні, зупинити виконання і повідомити версії та потрібну передумову.
- Якщо `package.json` вже існує, адаптувати scripts без видалення наявних залежностей.
- У разі помилки JSON або npm виправити лише причину помилки та повторити перевірку.

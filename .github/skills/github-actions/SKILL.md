---
name: github-actions
description: "Use when creating cross-platform local CI scripts and a GitHub Actions workflow for JavaScript npm projects."
---

# GitHub Actions

## Purpose

Створити однаковий CI-процес для локального запуску та GitHub Actions із перевіркою на Ubuntu, Windows і macOS.

## Inputs

- `package.json` з scripts `build` і `test`.
- Команди встановлення залежностей через `npm ci` або `npm install`.
- Потрібні версії Node.js та назва гілок для запуску workflow.

## Outputs

- `ci.sh` для Linux/macOS.
- `ci.bat` для Windows CMD.
- `.github/workflows/ci.yml` з matrix `[ubuntu-latest, windows-latest, macos-latest]`.
- Workflow із checkout, setup-node, встановленням залежностей, build і Jest test.

## Verification

1. Запустити `sh ci.sh` у Linux/macOS або Git Bash.
2. Запустити `ci.bat` у Windows CMD.
3. Перевірити YAML workflow на коректну matrix-конфігурацію.
4. Перевірити, що кожна ОС виконує однакові `npm ci`, `npm run build` і `npm test`.
5. Переконатися, що CI не комітить артефакти та не використовує секрети без декларації.

## Error Handling

- У shell-скрипті використовувати режим завершення при помилці; у batch перевіряти `errorlevel`.
- Якщо lockfile відсутній, повідомити про це і використовувати `npm install` лише за погодженою політикою.
- Не маскувати помилки build або test через `|| true`, `continue-on-error` чи аналоги.
- Якщо workflow невалідний, виправити YAML і повторити локальну перевірку структури.

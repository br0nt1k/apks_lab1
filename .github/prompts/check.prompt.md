---
name: check
description: "Перевірити структуру JavaScript npm-проєкту та запустити тести без зміни файлів."
---

# Check

Виконай read-only перевірку:

1. Переконайся, що існують `package.json`, `.gitignore`, `src/index.js`, `ci.sh`, `ci.bat` і `.github/workflows/ci.yml`.
2. Перевір, що `node_modules/` і `coverage/` не відстежуються Git.
3. Запусти `npm test -- --runInBand`.
4. Запусти `npm run build`.
5. Перевір YAML workflow і наявність трьох runner labels.

Не змінюй файли. Працюй за принципом Fail-Fast і повертай точну причину першої невдачі.

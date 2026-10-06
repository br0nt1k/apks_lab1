@echo off
setlocal

call node --version
if errorlevel 1 exit /b %errorlevel%

call npm --version
if errorlevel 1 exit /b %errorlevel%

call npm ci
if errorlevel 1 call npm install
if errorlevel 1 exit /b %errorlevel%

call npm run build
if errorlevel 1 exit /b %errorlevel%

call npm test
if errorlevel 1 exit /b %errorlevel%

call npm start
if errorlevel 1 exit /b %errorlevel%

endlocal

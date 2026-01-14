@echo off
REM Setup script for Nanda Portfolio - Node.js/Express version (Windows)

echo.
echo ======================================
echo Nanda Portfolio - Express Setup
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo X Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo [OK] Node.js and npm are installed
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo Node.js version: %NODE_VERSION%

REM Check if assets folder exists
if not exist "assets" (
    echo X Assets folder not found in current directory
    pause
    exit /b 1
)

echo.
echo Creating public/assets directory...
if not exist "public\assets" (
    mkdir public\assets
)

echo Copying assets to public folder...
xcopy /Y /I /E "assets\*" "public\assets\"

if exist "public\assets\Main.png" (
    echo [OK] Assets copied successfully
) else (
    echo [WARNING] Could not copy assets - please do it manually
)

echo.
echo Installing npm dependencies...
call npm install

echo.
echo ======================================
echo [OK] Setup Complete!
echo ======================================
echo.
echo To start the server, run:
echo   npm start          (production)
echo   npm run dev        (development with auto-reload)
echo.
echo Then open: http://localhost:3000
echo.
pause

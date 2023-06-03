cd frontend
call npm run build
del /F /Q "C:\Users\krott\Documents\[Github]\ChatbotLanguage\MegaBotMain\backend\public\*"
robocopy /E /move  "C:\Users\krott\Documents\[Github]\ChatbotLanguage\MegaBotMain\frontend\build" "C:\Users\krott\Documents\[Github]\ChatbotLanguage\MegaBotMain\backend\public"
cd "C:\Users\krott\Documents\[Github]\ChatbotLanguage\MegaBotMain\backend"
start "" "http://localhost:5000/"
node server.js

@echo off
if %ERRORLEVEL% neq 0 (
echo [BATCH][[[An error occurred in the Python script.]]] 
pause
)


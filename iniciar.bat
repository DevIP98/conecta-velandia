@echo off
echo Iniciando ConectaVelandia...
echo.
echo Abre tu navegador en: http://localhost:8080
echo Para cerrar, presiona Ctrl+C en esta ventana.
echo.
start "" "http://localhost:8080"
python -m http.server 8080
pause

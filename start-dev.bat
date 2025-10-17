@echo off
echo ========================================
echo  CognitivaCare - Iniciar Desarrollo
echo ========================================
echo.

echo Iniciando Backend en puerto 5000...
start cmd /k "cd backend && npm run dev"

echo.
echo Esperando 3 segundos...
timeout /t 3 /nobreak > nul

echo.
echo Iniciando Frontend en puerto 3000...
start cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo  Servicios iniciados:
echo  - Backend: http://localhost:5000
echo  - Frontend: http://localhost:3000
echo ========================================
echo.
echo Presiona cualquier tecla para salir...
pause > nul

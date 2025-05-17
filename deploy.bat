@REM deno run -A deploy.js

if not exist "%TARGET%\readme" md "%TARGET%\readme"
if not exist "%TARGET%\slideme" md "%TARGET%\slidme"
if not exist "%TARGET%\proposal" md "%TARGET%\proposal"

set "ORIGIN=B:\Repositorios\reactful\document"
set "TARGET=B:\Repositorios\jsenaribeiro.github.io"

xcopy %ORIGIN% %TARGET% /y /s /e

del /s /q %TARGET%\readme\src\*.md
del /s /q %TARGET%\readme\deploy.*

rd /s /q %TARGET%\readme\md

cd ../../jsenaribeiro.github.io

git add .
git commit -m 'doc....'
git push

cd %ORIGIN%
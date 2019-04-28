## W pliku index.js stwórz własny endpoint do wysyłania maila w `app.post(...)`
## Na serwerze pobierz repozytorium do katalogu /var/www/mailer –
`git pull origin mailer`
## zrestartuje PM2 – `pm2 restart /var/www/mailer/server.js`
## sprawdź czy serwer działa
`pm2 status`

## Serwerz tworzy emdpoint zgodnie ze schematem:
`https://mailer.warp10.pl` + twój route

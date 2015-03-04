/**
 * Created by dem on 3/7/15.
 */
// 1. Аргументы командной строки
// 2. Переменные среды
// 3. Наш собственный файл с конфигурацией
var nconf = require('nconf');
nconf.argv()
    .env()
    .file({ file: './config/main.json' });

module.exports = nconf;


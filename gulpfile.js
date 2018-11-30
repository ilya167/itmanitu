    var gulp = require('gulp'), // Подключаем Gulp
        less = require('gulp-less'); //Подключаем less пакет
browserSync = require('browser-sync'); // Подключаем Browser Sync
    gulp.task('less', function(){ // Создаем таск "less"
        return gulp.src('app/less/main.less') // Берем источник
            .pipe(less()) // Преобразуем less в CSS посредством gulp-less
            .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
    });
    gulp.task('browser-sync', function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browser Sync
            server: { // Определяем параметры сервера
                baseDir: 'app' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });

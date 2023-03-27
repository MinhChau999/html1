## docker compose up -d

## create backend laravel

- 'composer create-project laravel/laravel backend'
- if dont load vendor then 'composer install --ignore-platform-reqs'
- if failed to open stream: No such file or directory (Laravel)
- thn 'php artisan config:cache &&  php artisan config:clear &&  composer dump-autoload -o'
- setup env for back end like this file .env

## set up api for backend

- laravel auth: đăng ký đăng nhập
- passport
- api

## create front end vue

- 'vue create front-end'
- 'npm run build' để xây dựng file html single page
- vue router
- vueX

## Backend process

- migration and seed
-

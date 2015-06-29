# Introduction

Boilerplate for Angular2 learning

Based on the angular boilerplate [angular2-seed](https://github.com/mgechev/angular2-seed) by [mgechev](https://github.com/mgechev)

# How to start

```bash
git clone https://github.com/ClementGendry/HoroscopeAnnuel.git
cd angular2-base
npm install
npm install -g gulp # If you don't have gulp already installed
npm install moment --save
```
When momentJS is set up in the project, modify gulpfile.js at line 149 to make sure .png and .jpg files are loaded correctly

```bash
return gulp.src(['./app/**/*.html', './app/**/*.css', './app/**/*.jpg', './app/**/*.png'])
    .pipe(gulp.dest(PATH.dest.dev.all));
```
Then, start the gulp server

```bash
gulp serve # To start the server
```

# License

MIT

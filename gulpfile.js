var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

// Task: html
gulp.task('html', function(){
	
});

// Task: styles
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

// Watch for changes and run previuosly set tasks accordingly 
gulp.task('watch', function() {
	
	watch('./app/index.html', function(){

	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});
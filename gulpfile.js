const { series, parallel, src, dest } = require('gulp');
const fs = require('fs')
const babel = require('gulp-babel');

async function build(cb) {
    return src('package.json')
        .pipe(babel())
        .pipe(dest('output/'))
}

exports.build = build;
exports.default = build;
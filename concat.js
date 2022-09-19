const concat = require('concat');
(async function build(){
    const files =[
        './dist/angular_q2_counter/runtime.js',
        './dist/angular_q2_counter/polyfills.js',
        './dist/angular_q2_counter/main.js'
    ];
    await concat(files,'./dist/angular_q2_counter/angular_q2_counter.js');
})();
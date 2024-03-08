var fs = require('fs');
var colors = require('colors');
colors.enable()

fs.readFile('../fxmanifest.lua', 'utf8', function (err, data) {
    if (err) throw err;

    console.info('>'.blue, 'Updating fxmanifest file...')

    let expr = /files \{([^}]*)\}/g
    let replace = 
`files {
    "ui/index.html",
    "ui/js/*.*",
    "ui/css/*.*",
    "ui/fonts/*.*",
    "ui/img/*.*"
}`

    if (process.env.NODE_ENV === 'development') {
        replace = 
`files {
    "ui/shim.html"
}`
    }

    data = data.replaceAll(expr, replace)

    fs.writeFile ('../fxmanifest.lua', data, function(err) {
        if (err) throw err;
        console.info('fxmanifest file updated!'.green);
    });
});
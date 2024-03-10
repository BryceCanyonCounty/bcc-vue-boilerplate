var fs = require('fs');
var colors = require('colors');
colors.enable()

fs.readFile('../fxmanifest.lua', 'utf8', function (err, data) {
    if (err) throw err;

    console.info('>'.blue, 'Updating fxmanifest file...')

    let expr = /files \{([^}]*)\}/g
    let replace = 
`files {
    "ui/dist/index.html",
    "ui/dist/**/*"
}`

    let to_file = 'ui/shim.html';
    let from_file = 'ui/index.html'

    if (process.env.NODE_ENV === 'development') {
        replace = 
`files {
    "ui/shim.html"
}`

        to_file = 'ui/index.html';
        from_file = 'ui/shim.html';
    }

    data = data.replaceAll(to_file, from_file)
    data = data.replaceAll(expr, replace)

    fs.writeFile ('../fxmanifest.lua', data, function(err) {
        if (err) throw err;
        console.info('fxmanifest file updated!'.green);
    });
});
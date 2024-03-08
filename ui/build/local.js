var fs = require('fs');
var path = require('path');
var archiver = require('archiver');
var colors = require('colors');
colors.enable()

var { version } = require('../package.json')

function zipDirectory(sourceDir, outFolder, outPath) {
    const archive = archiver('zip', { zlib: { level: 9 }});

    fs.mkdirSync(outFolder, { recursive: true });
    const stream = fs.createWriteStream(`${outFolder}/${outPath}`);
  
    return new Promise((resolve, reject) => {
      archive
        .directory(sourceDir, false)
        .on('error', err => reject(err))
        .pipe(stream)
      ;
  
      stream.on('close', () => resolve());
      archive.finalize();
    });
}

(async () => {
    console.info(">".blue, "Cloning project into release...")
    fs.readdirSync('../').forEach(path => {
        if (path !== 'ui' && path !=='releases') {
            fs.cpSync(`../${path}`, `../temp/${path}`, {recursive: true});
        }
    })
    
    console.info(">".blue, "Cloning UI build into release...");
    fs.cpSync('./dist', '../temp/ui', {recursive: true});
    
    let name = path.basename(path.resolve('../'));
    let output_file = `releases/${version}/${name}`

    if (process.env.ZIP === 'true') {
        console.info(">".blue, "Creating your release zip...");
        await zipDirectory('../temp', `../releases/${version}`, `${name}.zip`);
        output_file = output_file+'.zip';
    } else {
        console.info(">".blue, "Creating your release file...");
        fs.cpSync('../temp', `../${output_file}`, {recursive: true});
    }
    
    console.info(">".blue, "Cleaning up temp build folders...");
    fs.rmSync('../temp', {force: true, recursive: true});
    fs.rmSync('./dist', {force: true, recursive: true});
    
    console.info(`Release is done!`.green, `${output_file}`.underline.yellow);
})()
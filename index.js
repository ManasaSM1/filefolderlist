const path = require('path');
const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })


let folderName = "";

readline.question(`Which folder do you want to scan?`, (name) => {
    console.log(`Here are the contents of the folder "${name}"`)
    folderName = name;

    const folder = path.join(__dirname, folderName)

    fs.readdir(folder, function (err, files) {
        if (err) {
            console.log("unable to scan directory" + err);
        }

        files.forEach(function (file) {
            let ext = path.extname(file);
            ext == "" ? ext = "folder" : ext;
            console.log(`Name: ${file} | Type: ${ext}`);
        });
    })

    readline.close()
})
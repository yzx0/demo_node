#!/usr/bin/env node
var fs = require('fs')

var dirName = process.argv[2]

if(fs.existsSync("./" + dirName)){
    console.log("目录已存在")
}
else{
    fs.mkdirSync("./" + dirName)
    process.chdir("./" + dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    fs.writeFileSync("./index.html","<!DOCTYPE html><link rel=\"stylesheet\" href=\"./css/style.css\"><script src=\"js/main.js\"></script><title>Hello</title><h1>Hi</h1>")
    fs.writeFileSync("css/style.css","h1{color: red;}")
    fs.writeFileSync("./js/main.js","var string = \"Hello World\"; alert(string)")

    process.exit(0)
}
    


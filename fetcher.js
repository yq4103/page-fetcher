const fs = require('fs')
const request = require('request');

const url = process.argv[2];
const localPath = process.argv[3];

request(url, (error, response, body) => {
  console.log(url)
  fs.writeFile(localPath, body, (err) => {if (err) {
    console.error(err)
    return
  }
  const stats = fs.statSync(localPath);
  const fileSize = stats.size;
  console.log(fileSize);
  console.log(`Downloaded and saved ${fileSize} bytes to ${localPath}`)
  })

})






//a URL
//a local file path

//> node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html
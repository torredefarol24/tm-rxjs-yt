const express = require('express');
const app = express();
const path = require('path');
const filePath = path.join(__dirname, 'public/index.html')
app.use(express.static('public'))
app.use(express.static('dist'))
app.get("*", (req, res) => {
  res.sendFile(filePath)
})
app.listen(4000, () => console.log("Listening on 4000"));
const express = require('express');

const app = express();

app.use(express.static('./dist/dw-mcruzt-app'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/dw-mcruzt-app' }
  );
});

app.listen(process.env.PORT || 4500);

console.log(`Running on port ${process.env.PORT || 4500}`)

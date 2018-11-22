var express = require("express");
var app = express();
var path = require('path');

//app.use(express.static('/asteroid-dodger.html'));

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/asteroid-dodger.html'));
  });
  // [END hello_world]

if (module === require.main) {
    // [START server]
    // Start the server
    const server = app.listen(process.env.PORT || 8080, () => {
      const port = server.address().port;
      console.log(`App listening on port ${port}`);
    });
    // [END server]
  }
  
  module.exports = app;
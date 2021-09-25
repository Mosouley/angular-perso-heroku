// function requireHTTPS(req, res, next) {
//   // The 'x-forwarded-proto' check is for Heroku
//   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//       return res.redirect('https://' + req.get('host') + req.url);
//   }
//   next();
// }


//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/personal-portfolio'));

app.get('/*', function(req,res) {
  const fullPath = path.join(__dirname + '/dist/personal-portfolio/index.html');
  console.log(" Fetching from.." + fullPath);
  res.sendFile(fullPath);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
//------------


// app.use(requireHTTPS);

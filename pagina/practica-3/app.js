const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
express()
.use(express.static(path.join(__dirname, 'dist')))
.get('/', (req, res) => res.render('dist/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`));
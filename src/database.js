const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-crud1';

/*mongoose.connect(URI)
  .then(db => console.log('Db is connected'),{ useNewUrlParser: true })
  .catch(error => console.error(error));
*/

mongoose
.connect (URI, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then (() => console.log ('DB Connected!'))
.catch (err => {
console.log (`DB Connection Error: ${err.message}`);
});
module.exports = mongoose;
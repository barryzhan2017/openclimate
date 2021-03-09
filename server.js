const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//     '<PASSWORD>',
//     process.env.DATABASE_PASSWORD
// );

// mongoose
//     .connect(DB, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true
//     })
//     .then(con => console.log('DB connection is successful.'));


mongoose.connect('mongodb://localhost/openClimate', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

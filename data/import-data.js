const dotenv = require("dotenv");
const mongoose = require("mongoose");
const xlsx = require("xlsx");
const Contact = require('./../models/contactModel');
dotenv.config({ path: './../config.env' });


const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => console.log('DB connection is successful.'));



const read = async () => {
  const wb = xlsx.readFile("data.xlsx", {cellDates:true});
  console.log(wb.SheetNames);
  ws = wb.Sheets['Sheet1']
  var data = xlsx.utils.sheet_to_json(ws);
  try {
    await Contact.collection.insertMany(data);
    console.log("Data successfully loaded!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
}


const deleteData = async () => {
  try {
    await Contact.deleteMany();
    console.log("Data successfully deleted!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  read();
} else if (process.argv[2] === "--delete") {
  deleteData();
} 

console.log(process.argv);

  

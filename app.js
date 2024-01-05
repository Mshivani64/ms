const express = require("express");
const cors = require("cors");
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
const countryRoutes=require("./routes/V1/countryRoutes");
const stateRoutes=require("./routes/V1/stateRoutes")
const cityRoutes = require('./routes/V1/cityRoutes');
const locationRoutes = require('./routes/V1/locationRoutes');
const localityRoutes = require('./routes/V1/localityRoutes');
const userRoutes = require('./routes/V1/userRoutes');
const userRoleRoutes = require('./routes/V1/userRoleRoutes');
const fieldMasterRoutes = require('./routes/V1/fieldMasterRoutes');
const documentMasterRoutes = require('./routes/V1/documentMasterRoutes')
const branchRoutes = require('./routes/V1/branchRoutes');
const loginUserRoutes = require('./routes/V1/loginUserRoutes');
const enrolmentCenterRoutes = require('./routes/V1/enrolmentCenterRoutes');
const AppointmentRoutes = require('./routes/V1/AppointmentSlotRoutes');
const bookAppointmentRoutes = require('./routes/V1/bookAppointmentRoutes');
const otpRoutes = require('./routes/V1/otpRoutes');
const app = express();
const PORT = process.env.PORT || 3111;


// Use the cors middleware with options
app.use(cors({
  origin: '*', // Replace with your allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (cookies, authorization headers)
  optionsSuccessStatus: 204, // Respond with a 204 No Content on OPTIONS requests
}));

// app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const sequelize = require('./config/dbConfig');

sequelize
  .sync()
  .then(() => {
    console.log("Database is connceted sucsesful!");
  })
  .catch((error) => {
    console.error("Error creating database and tables:", error);
  });
//app.use("/api/v1/countries", countryRoutes);  i want to change it 

app.use("/countries", countryRoutes);
app.use("/states",stateRoutes)
app.use('/city', cityRoutes);
app.use('/location', locationRoutes);
app.use('/locality', localityRoutes);
app.use('/users', userRoutes);
app.use('/userRoles', userRoleRoutes);
app.use('/fieldMaster', fieldMasterRoutes);
app.use('/documentMaster', documentMasterRoutes);
app.use('/branches', branchRoutes);
app.use('/login', loginUserRoutes);
app.use('/enrolmentcenter', enrolmentCenterRoutes);
app.use('/otp', otpRoutes);//pendig 
app.use('/Appointmentslot', AppointmentRoutes);
app.use('/bookAppointment', bookAppointmentRoutes);







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import * as express from 'express';
import * as multer from 'multer'
import * as cors from 'cors'
import * as mongoose from 'mongoose'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as methodOverride from 'method-override'
 
// Generell properties
export let UPLOAD_PATH = 'uploads'
export let PORT = 8000;
 
// Multer Settings for file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
export let upload = multer({ storage: storage })
 
// Initialise App
export const app = express();
app.use(cors());
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override')); 

 
// Load our routes
var routes = require('./routes');
 
// Setup Database
let uri = 'mongodb://localhost/imageupload';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDb');
    }
});
 
// App startup
app.listen(PORT, function () {
    console.log('listening on port: ' + PORT);
});
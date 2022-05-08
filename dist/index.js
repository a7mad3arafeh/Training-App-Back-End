"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbconnect_1 = require("./dbconnect");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./middleware/auth");
const port = 3000;
let app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('common', {
    stream: fs_1.default.createWriteStream(path_1.default.join(__dirname, '../access.log'), { flags: 'a' })
}));
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// *****************
// Router get
// *****************
app.get('/', (req, res) => {
    res.send("This is the Home page \nCreated By: \nAhmad Arafeh ");
});
app.get('/home', (req, res) => {
    res.send("This is the Home page \nCreated By: \nAhmad Arafeh ");
});
app.get('/appform', (req, res) => {
    console.log("inside the get '/Application Form' route");
    dbconnect_1.connection.query('SELECT * FROM applicationform', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/appform/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM applicationform WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is Applicant yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get('/company', (req, res) => {
    console.log("inside the get '/Company' route");
    dbconnect_1.connection.query('SELECT * FROM company', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/company/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM company WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is Company yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get('/tasklist', (req, res) => {
    console.log("inside the get '/Tasklist' route");
    dbconnect_1.connection.query('SELECT * FROM tasklist', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/tasklist/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM tasklist WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is Tasklist yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get('/trainee', (req, res) => {
    console.log("inside the get '/Trainee' route");
    dbconnect_1.connection.query('SELECT * FROM trainee', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/trainee/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM trainee WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is Trainee yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get('/trainer', (req, res) => {
    console.log("inside the get '/Trainer' route");
    dbconnect_1.connection.query('SELECT * FROM trainer', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/trainer/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM trainer WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is Trainer yet!!");
        }
        else {
            // let id2 = res.params['TaskListID'];
            // connection.query('SELECT * FROM tasklist WHERE id=?', id2, (err, result)=>{
            res.json(result);
        }
    });
});
app.get('/unitrainingsupervisor', (req, res) => {
    console.log("inside the get '/Uni. training supervisor' route");
    dbconnect_1.connection.query('SELECT * FROM unitrainingsupervisor', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/unitrainingsupervisor/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM unitrainingsupervisor WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is Uni. training supervisor yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get('/user', (req, res) => {
    console.log("inside the get '/User' route");
    dbconnect_1.connection.query('SELECT * FROM user', (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ "Error": err });
        }
        else {
            res.json(result);
        }
    });
});
app.get('/user/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query('SELECT * FROM user WHERE id=?', id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ 'Error': err });
            res.send("There is User yet!!");
        }
        else {
            res.json(result);
        }
    });
});
// *****************
// Router post
// *****************
app.post('/signup', (req, res) => {
    const user = req.body.user;
    // user.Password = bcrypt.hash(user.Password, 10);
    dbconnect_1.connection.query("SELECT * FROM user WHERE Email=?", [user.Email], (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({ "error": 2 });
        }
        else {
            if (result.length > 0) {
                res.send('You are already registered');
            }
            else {
                dbconnect_1.connection.query(`INSERT INTO user (Email, Password) VALUES ('${user.Email}','${user.Password}')`, (err, result) => {
                    if (err) {
                        console.log("Error registering new user " + err);
                        res.send("Error registering new user");
                    }
                    else {
                        const token = (0, auth_1.generateAuthToken)(user);
                        res.header("x-auth-token", token).json({
                            "Email": user.Email
                        });
                    }
                });
            }
        }
    });
});
app.post('/login', (req, res) => {
    let user = req.body.user;
    dbconnect_1.connection.query("SELECT * FROM user WHERE Email=? AND Password=?", [user.Email, user.Password], (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({ "error": 2 });
        }
        else {
            if (result.length > 0) {
                res.send('Welcome ' + user.Email);
                const token = (0, auth_1.generateAuthToken)(user);
                res.header("x-auth-token", token).send({
                    _id: user.id,
                    email: user.Email,
                });
            }
            else {
                res.json({ "Access Denid": true });
            }
        }
    });
});
app.post('/appform', (req, res) => {
    let appform = req.body.appform;
    dbconnect_1.connection.query(`
    INSERT INTO applicationform (FName, LName, PhoneNo, Addres, Email, university, Field, ExpectedDOGrad, TotalAvg, TypeOfTraining, DaysAvailable, HoursAvailable, ReqTrainingHours, SupervisorPhoneNo, UniversityDoc, CVC) VALUES
    ('${appform.Fname}', '${appform.Lname}', '${appform.PhoneNo}','${appform.Address}', '${appform.Email}', '${appform.University}', '${appform.Field}', '${appform.ExDOGrad}', '${appform.TotalAvg}', '${appform.TypeOfTraining}','${appform.DaysAva}', '${appform.HoursAva}', '${appform.ReqTrainingHours}', '${appform.SuperPhoneNo}', '${appform.UniDoc}', '${appform.CVC}');
    `, (err, result) => {
        if (err) {
            console.log('Error ' + err);
            res.json({ 'Error': err });
        }
        else {
            res.json({ 'Created': result });
        }
    });
});
app.post('/company', (req, res) => {
    let company = req.body.company;
    dbconnect_1.connection.query(`
    INSERT INTO applicationform (userName, Password, Name, Description, PhoneNo, TrainerID, SupervisorID) VALUES
    ('${company.Username}', '${company.Password}', '${company.Name}','${company.Description}', '${company.PhoneNo}', '${company.TrainerID}', '${company.SupervisorID}');
    `, (err, result) => {
        if (err) {
            console.log('Error ' + err);
            res.json({ 'Error': err });
        }
        else {
            res.json({ 'Created': result });
        }
    });
});
app.post('/tasklist', (req, res) => {
    let tasklist = req.body.tasklist;
    dbconnect_1.connection.query(`
    INSERT INTO tasklist (Name, Date, Notes) VALUES
    ('${tasklist.Name}', '${tasklist.Date}', '${tasklist.Notes}');
    `, (err, result) => {
        if (err) {
            console.log('Error ' + err);
            res.json({ 'Error': err });
        }
        else {
            res.json({ 'Created': result });
        }
    });
});
app.post('/trainee', (req, res) => {
    let trainee = req.body.trainee;
    dbconnect_1.connection.query(`
    INSERT INTO trainee (UserName, Password, FName, LName, SupervisorID, TrainerID, DOB, TrainingHours, TaskListID	) VALUES
    ('${trainee.Username}', '${trainee.Password}', '${trainee.FName}','${trainee.LName}', '${trainee.SupervisorID}', '${trainee.DOB}', '${trainee.TrainingHours}', '${trainee.TaskListID}');
    `, (err, result) => {
        if (err) {
            console.log('Error ' + err);
            res.json({ 'Error': err });
        }
        else {
            res.json({ 'Created': result });
        }
    });
});
app.post('/trainer', (req, res) => {
    let trainer = req.body.trainer;
    dbconnect_1.connection.query(`
    INSERT INTO trainer (UserName, Password, FName, LName, SupervisorID, TrainerID, DOB, TrainingHours, TaskListID	) VALUES
    ('${trainer.Username}', '${trainer.Password}', '${trainer.FName}','${trainer.LName}', '${trainer.PhoneNo}', '${trainer.TaskListID}', '${trainer.TrainerID}', '${trainer.Department}');
    `, (err, result) => {
        if (err) {
            console.log('Error ' + err);
            res.json({ 'Error': err });
        }
        else {
            res.json({ 'Created': result });
        }
    });
});
app.post('/unitrainingsupervisor', (req, res) => {
    let unitrainingsupervisor = req.body.unitrainingsupervisor;
    dbconnect_1.connection.query(`
    INSERT INTO unitrainingsupervisor (UserName, Password, SupervisorName, UniName, PhoneNo, TraineeID) VALUES
    ('${unitrainingsupervisor.Username}', '${unitrainingsupervisor.Password}', '${unitrainingsupervisor.SupName}','${unitrainingsupervisor.UniName}', '${unitrainingsupervisor.PhoneNo}', '${unitrainingsupervisor.TraineeID}');
    `, (err, result) => {
        if (err) {
            console.log('Error ' + err);
            res.json({ 'Error': err });
        }
        else {
            res.json({ 'Created': result });
        }
    });
});
// *****************
// Router put
// *****************
app.put('/editAppForm/:id', (req, res) => {
    let id = req.params['id'];
    let appform = req.body.appform;
    dbconnect_1.connection.query(`UPDATE applicationform SET  
    FName='${appform.Fname}', LName='${appform.Lname}', PhoneNo='${appform.PhoneNo}', Addres='${appform.Address}', 
    Email='${appform.Email}', university='${appform.University}' ,Field='${appform.Field}', ExpectedDOGrad='${appform.ExDOGrad}', 
    TotalAvg='${appform.TotalAvg}', TypeOfTraining='${appform.TypeOfTraining}', DaysAvailable='${appform.DaysAva}', 
    HoursAvailable='${appform.HoursAva}', ReqTrainingHours='${appform.ReqTrainingHours}', SupervisorPhoneNo='${appform.SuperPhoneNo}'
    WHERE id=${id}`, (err, result) => {
        if (err) {
            res.status(404).json({ "Error": err });
            console.log(err);
        }
        else {
            res.json({ 'Success': result });
        }
    });
});
app.put('/editTasklist/:id', (req, res) => {
    let id = req.params['id'];
    let tasklist = req.body.tasklist;
    dbconnect_1.connection.query(`UPDATE tasklist SET  
    Name='${tasklist.Name}', Date='${tasklist.Date}', Notes='${tasklist.Notes}' 
    WHERE id=${id}`, (err, result) => {
        if (err) {
            res.status(404).json({ "Error": err });
            console.log(err);
        }
        else {
            res.json({ 'Success': result });
        }
    });
});
// *****************
// Router delete
// *****************
app.delete('/tasklist/:id', (req, res) => {
    let id = req.params['id'];
    dbconnect_1.connection.query("DELETE FROM tasklist WHERE id=?", id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).json({ "Error": err });
        }
        else {
            res.json({ "success": result });
        }
    });
});
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
//# sourceMappingURL=index.js.map
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
let crypto = require('crypto');
var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
var key = 'May We Meet again';
let app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("common", {
    stream: fs_1.default.createWriteStream(path_1.default.join(__dirname, "../access.log"), {
        flags: "a",
    }),
}));
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// *****************
// Router get
// *****************
app.get("/", (req, res) => {
    res.send("This is the Home page \nCreated By: \nAhmad Arafeh ");
});
app.get("/home", (req, res) => {
    res.send("This is the Home page \nCreated By: \nAhmad Arafeh ");
});
app.get("/appform", (req, res) => {
    console.log("inside the get '/Application Form' route");
    dbconnect_1.connection.query("SELECT * FROM applicationform", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/appform/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM applicationform WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
            res.send("There is Applicant yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get("/company", (req, res) => {
    console.log("inside the get '/Company' route");
    dbconnect_1.connection.query("SELECT * FROM company", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/company/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM company WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
            res.send("There is Company yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get("/tasklist", (req, res) => {
    console.log("inside the get '/Tasklist' route");
    dbconnect_1.connection.query("SELECT * FROM tasklist", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/tasklist/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM tasklist WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
            res.send("There is Tasklist yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get("/trainee", (req, res) => {
    console.log("inside the get '/Trainee' route");
    dbconnect_1.connection.query("SELECT * FROM trainee", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/trainee/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM trainee WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
            res.send("There is Trainee yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get("/trainer", (req, res) => {
    console.log("inside the get '/Trainer' route");
    dbconnect_1.connection.query("SELECT * FROM trainer", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/employee", (req, res) => {
    console.log("inside the get '/employee' route");
    dbconnect_1.connection.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/trainer/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM trainer WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
            res.send("There is Trainer yet!!");
        }
        else {
            // let id2 = res.params['TaskListID'];
            // connection.query('SELECT * FROM tasklist WHERE id=?', id2, (err, result)=>{
            res.json(result);
        }
    });
});
app.get("/unitrainingsupervisor", (req, res) => {
    console.log("inside the get '/Uni. training supervisor' route");
    dbconnect_1.connection.query("SELECT * FROM unitrainingsupervisor", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/unitrainingsupervisor/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM unitrainingsupervisor WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
            res.send("There is Uni. training supervisor yet!!");
        }
        else {
            res.json(result);
        }
    });
});
app.get("/user", (req, res) => {
    console.log("inside the get '/User' route");
    dbconnect_1.connection.query("SELECT * FROM user", (err, result) => {
        if (err) {
            console.log("query error: " + err);
            res.json({ Error: err });
        }
        else {
            res.json(result);
        }
    });
});
app.get("/user/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("SELECT * FROM user WHERE id=?", id, (err, result) => {
        if (err) {
            console.log("Error: " + err);
            res.json({ Error: err });
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
//Encrypting text
function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, key);
    var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
}
;
function decrypt(encrypted) {
    var decipher = crypto.createDecipher(algorithm, key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
    return decrypted;
}
;
app.post("/signup", (req, res) => {
    const user = req.body;
    console.log(user);
    let newpass = encrypt(user.Password);
    // user.Password = bcrypt.hash(user.Password, 10);
    console.log(user.Password);
    dbconnect_1.connection.query("SELECT * FROM user WHERE Email=? and Password", [user.Email, ''], (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({ error: 2 });
        }
        else {
            if (result.length > 0) {
                res.send("You are already registered");
            }
            else {
                dbconnect_1.connection.query(`INSERT INTO user (Email, Password, Role) 
            VALUES ('${user.Email}','${newpass}','${user.Role}')`, (err, result) => {
                    if (err) {
                        console.log("Error registering new user " + err);
                        res.send("Error registering new user");
                    }
                    else {
                        const token = (0, auth_1.generateAuthToken)(user);
                        res.header("x-auth-token", token).json({
                            Email: user.Email,
                        });
                    }
                });
            }
        }
    });
});
app.post("/login", (req, res) => {
    let user = req.body;
    console.log(user);
    user.Password = encrypt(user.Password);
    dbconnect_1.connection.query("SELECT * FROM user WHERE 	Email=? AND Password=?", [user.Email, user.Password], (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({ error: 2 });
            // console.log(result,"dfjkdf");
        }
        else {
            if (result.length > 0) {
                const token = (0, auth_1.generateAuthToken)(user);
                let usRes = result[0];
                console.log(usRes);
                console.log(usRes);
                res.json({ token: token,
                    _id: usRes.ID,
                    Email: usRes.Email,
                    Role: usRes.Role });
                // res.header("x-auth-token", token).json({
                //   _id: user.id,
                //   Email: user.Email,
                //   Role:user.Role
                // });
            }
            else {
                res.json({ "Access Denid": true, result: result });
            }
        }
    });
});
app.post("/appform", (req, res) => {
    let appform = req.body.appform;
    dbconnect_1.connection.query(`
    INSERT INTO applicationform (FName, LName, PhoneNo, StudentID, Addres, Email, university, Field, ExpectedDOGrad, TotalAvg, TypeOfTraining, DaysAvailable, HoursAvailable, ReqTrainingHours, SupervisorPhoneNo, UniversityDoc, Emailsup) VALUES
    ('${appform.FName}', '${appform.LName}', '${appform.PhoneNo}', '${appform.StudentID}', '${appform.Addres}', '${appform.Email}', '${appform.university}', '${appform.Field}', '${appform.ExpectedDOGrad}', '${appform.TotalAvg}', '${appform.TypeOfTraining}', '${appform.DaysAvailable}', '${appform.HoursAvailable}', '${appform.ReqTrainingHours}', '${appform.SupervisorPhoneNo}' , '${appform.UniversityDoc}', '${appform.Emailsup}');
    `, (err, result) => {
        if (err) {
            console.log("Error " + err);
            res.json({ Error: err });
        }
        else {
            res.json({ "Created Done": result });
        }
    });
});
// Error
app.post("/company", (req, res) => {
    let company = req.body.company;
    dbconnect_1.connection.query(`
    INSERT INTO applicationform (userName, Password, Name, Description, PhoneNo, TrainerID, SupervisorID) VALUES
    ('${company.Username}', '${company.Password}', '${company.Name}','${company.Description}', '${company.PhoneNo}', '${company.TrainerID}', '${company.SupervisorID}');
    `, (err, result) => {
        if (err) {
            console.log("Error " + err);
            res.json({ Error: err });
        }
        else {
            res.json({ Created: result });
        }
    });
});
app.post("/tasklist", (req, res) => {
    let tasklist = req.body.tasklist;
    dbconnect_1.connection.query(`
    INSERT INTO tasklist (Name, Date, Notes) VALUES
    ('${tasklist.Name}', '${tasklist.Date}', '${tasklist.Notes}');
    `, (err, result) => {
        if (err) {
            console.log("Error " + err);
            res.json({ Error: err });
        }
        else {
            res.json({ Created: result });
        }
    });
});
// Error
app.post("/trainee", (req, res) => {
    let trainee = req.body.trainee;
    dbconnect_1.connection.query(`
    INSERT INTO trainee (ProfilePic, Email, Major, Password, DOB, TrainingHours) VALUES
    ('${trainee.ProfilePic}', '${trainee.Email}', '${trainee.Major}', '${trainee.Password}',  '${trainee.DOB}', '${trainee.TrainingHours}');
    `, (err, result) => {
        if (err) {
            console.log("Error " + err);
            res.json({ Error: err });
        }
        else {
            res.json({ Created: result });
        }
    });
});
// Error
app.post("/trainer", (req, res) => {
    let trainer = req.body.trainer;
    dbconnect_1.connection.query(`
    INSERT INTO trainer (UserName, Email, Password, FName, LName, PhoneNo, TaskListID, TraineeID, Department) VALUES
    ('${trainer.Username}', '${trainer.Email}', '${trainer.Password}', '${trainer.FName}','${trainer.LName}', '${trainer.PhoneNo}', '${trainer.TaskListID}', '${trainer.TraineeID}', '${trainer.Department}');
    `, (err, result) => {
        if (err) {
            console.log("Error " + err);
            res.json({ Error: err });
        }
        else {
            res.json({ Created: result });
        }
    });
});
app.post("/unitrainingsupervisor", (req, res) => {
    let unitrainingsupervisor = req.body.unitrainingsupervisor;
    dbconnect_1.connection.query(`
    INSERT INTO unitrainingsupervisor (UserName, Password, SupervisorName, UniName, PhoneNo, TraineeID) VALUES
    ('${unitrainingsupervisor.Username}', '${unitrainingsupervisor.Password}', '${unitrainingsupervisor.SupName}','${unitrainingsupervisor.UniName}', '${unitrainingsupervisor.PhoneNo}', '${unitrainingsupervisor.TraineeID}');
    `, (err, result) => {
        if (err) {
            console.log("Error " + err);
            res.json({ Error: err });
        }
        else {
            res.json({ Created: result });
        }
    });
});
// *****************
// Router put
// *****************
app.put("/editAppForm/:id", (req, res) => {
    let id = req.params["id"];
    let appform = req.body.appform;
    dbconnect_1.connection.query(`UPDATE applicationform SET  
    FName='${appform.FName}', LName='${appform.LName}', PhoneNo='${appform.PhoneNo}', Addres='${appform.Addres}', 
    Email='${appform.Email}', university='${appform.university}' ,Field='${appform.Field}', ExpectedDOGrad='${appform.ExpectedDOGrad}', 
    TotalAvg='${appform.TotalAvg}', TypeOfTraining='${appform.TypeOfTraining}', DaysAvailable='${appform.DaysAvailable}', 
    HoursAvailable='${appform.HoursAvailable}', ReqTrainingHours='${appform.ReqTrainingHours}', SupervisorPhoneNo='${appform.SupervisorPhoneNo}'
    WHERE id=${id}`, (err, result) => {
        if (err) {
            res.status(404).json({ Error: err });
            console.log(err);
        }
        else {
            res.json({ Success: result });
        }
    });
});
app.put("/editTasklist/:id", (req, res) => {
    let id = req.params["id"];
    let tasklist = req.body.tasklist;
    dbconnect_1.connection.query(`UPDATE tasklist SET  
    Name='${tasklist.Name}', Date='${tasklist.Date}', Notes='${tasklist.Notes}' 
    WHERE id=${id}`, (err, result) => {
        if (err) {
            res.status(404).json({ Error: err });
            console.log(err);
        }
        else {
            res.json({ Success: result });
        }
    });
});
// *****************
// Router delete
// *****************
app.delete("/tasklist/:id", (req, res) => {
    let id = req.params["id"];
    dbconnect_1.connection.query("DELETE FROM tasklist WHERE id=?", id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(404).json({ Error: err });
        }
        else {
            res.json({ success: result });
        }
    });
});
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
//# sourceMappingURL=index.js.map
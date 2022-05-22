import express, { json } from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { connection, handleDisconnect } from "./dbconnect";
import bodyparser from "body-parser";
import cors from "cors";
// import bcrypt from "bcrypt";
import { logHello } from "./middleware/myMiddleware";
import User from "./User";
import { generateAuthToken } from "./middleware/auth";
import ApplicaionForm from "./ApplicationForm";
import Company from "./Company";
import TasksList from "./TasksList";
import Trainee from "./Trainee";
import University from "./University";
import Trainer from "./Trainer";
const port: number = 3000;

let app = express();

app.use(cors());

app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "../access.log"), {
      flags: "a",
    }),
  })
);

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

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
  connection.query("SELECT * FROM applicationform", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/appform/:id", (req, res) => {
  let id = req.params["id"];
  connection.query(
    "SELECT * FROM applicationform WHERE id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
        res.json({ Error: err });
        res.send("There is Applicant yet!!");
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/company", (req, res) => {
  console.log("inside the get '/Company' route");
  connection.query("SELECT * FROM company", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/company/:id", (req, res) => {
  let id = req.params["id"];
  connection.query("SELECT * FROM company WHERE id=?", id, (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.json({ Error: err });
      res.send("There is Company yet!!");
    } else {
      res.json(result);
    }
  });
});

app.get("/tasklist", (req, res) => {
  console.log("inside the get '/Tasklist' route");
  connection.query("SELECT * FROM tasklist", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/tasklist/:id", (req, res) => {
  let id = req.params["id"];
  connection.query("SELECT * FROM tasklist WHERE id=?", id, (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.json({ Error: err });
      res.send("There is Tasklist yet!!");
    } else {
      res.json(result);
    }
  });
});

app.get("/trainee", (req, res) => {
  console.log("inside the get '/Trainee' route");
  connection.query("SELECT * FROM trainee", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/trainee/:id", (req, res) => {
  let id = req.params["id"];
  connection.query("SELECT * FROM trainee WHERE id=?", id, (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.json({ Error: err });
      res.send("There is Trainee yet!!");
    } else {
      res.json(result);
    }
  });
});

app.get("/trainer", (req, res) => {
  console.log("inside the get '/Trainer' route");
  connection.query("SELECT * FROM trainer", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/trainer/:id", (req, res) => {
  let id = req.params["id"];
  connection.query("SELECT * FROM trainer WHERE id=?", id, (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.json({ Error: err });
      res.send("There is Trainer yet!!");
    } else {
      // let id2 = res.params['TaskListID'];
      // connection.query('SELECT * FROM tasklist WHERE id=?', id2, (err, result)=>{
      res.json(result);
    }
  });
});

app.get("/unitrainingsupervisor", (req, res) => {
  console.log("inside the get '/Uni. training supervisor' route");
  connection.query("SELECT * FROM unitrainingsupervisor", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/unitrainingsupervisor/:id", (req, res) => {
  let id = req.params["id"];
  connection.query(
    "SELECT * FROM unitrainingsupervisor WHERE id=?",
    id,
    (err, result) => {
      if (err) {
        console.log("Error: " + err);
        res.json({ Error: err });
        res.send("There is Uni. training supervisor yet!!");
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/user", (req, res) => {
  console.log("inside the get '/User' route");
  connection.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log("query error: " + err);
      res.json({ Error: err });
    } else {
      res.json(result);
    }
  });
});

app.get("/user/:id", (req, res) => {
  let id = req.params["id"];
  connection.query("SELECT * FROM user WHERE id=?", id, (err, result) => {
    if (err) {
      console.log("Error: " + err);
      res.json({ Error: err });
      res.send("There is User yet!!");
    } else {
      res.json(result);
    }
  });
});

// *****************
// Router post
// *****************

app.post("/signup", (req, res) => {
  const user: User = req.body.user;
  // user.Password = bcrypt.hash(user.Password, 10);
  connection.query(
    "SELECT * FROM user WHERE Email=?",
    [user.Email],
    (err, result) => {
      if (err) {
        console.log(err.message);
        res.json({ error: 2 });
      } else {
        if (result.length > 0) {
          res.send("You are already registered");
        } else {
          connection.query(
            `INSERT INTO user (Email, Password, UserName, Role) 
            VALUES ('${user.Email}','${user.Password}','${user.UserName}','${user.Role}')`,
            (err, result) => {
              if (err) {
                console.log("Error registering new user " + err);
                res.send("Error registering new user");
              } else {
                const token = generateAuthToken(user);
                res.header("x-auth-token", token).json({
                  Email: user.Email,
                });
              }
            }
          );
        }
      }
    }
  );
});

app.post("/login", (req, res) => {
  let user: User = req.body.user;
  connection.query(
    "SELECT * FROM user WHERE 	Email=? AND Password=?",
    [req.body.user.Email, req.body.user.Password],
    (err, result) => {
      if (err) {
        console.log(err.message);
        res.json({ error: 2 });
        // console.log(result,"dfjkdf");
      } else {
        if (result.length > 0) {
          const token = generateAuthToken(user);
          res.json({ token: token });
          res.header("x-auth-token", token).send({
            _id: user.id,
            Email: user.Email,
          });
        } else {
          res.json({ "Access Denid": true, result: result });
        }
      }
    }
  );
});

app.post("/appform", (req, res) => {
  let appform: ApplicaionForm = req.body.appform;
  connection.query(
    `
    INSERT INTO applicationform (FName, LName, PhoneNo, StudentID, Addres, Email, university, Field, ExpectedDOGrad, TotalAvg, TypeOfTraining, DaysAvailable, HoursAvailable, ReqTrainingHours, SupervisorPhoneNo, UniversityDoc, CVC) VALUES
    ('${appform.FName}', '${appform.LName}', '${appform.PhoneNo}', '${appform.StudentID}', '${appform.Addres}', '${appform.Email}', '${appform.university}', '${appform.Field}', '${appform.ExpectedDOGrad}', '${appform.TotalAvg}', '${appform.TypeOfTraining}', '${appform.DaysAvailable}', '${appform.HoursAvailable}', '${appform.ReqTrainingHours}', '${appform.SupervisorPhoneNo}', '${appform.UniversityDoc}', '${appform.CVC}');
    `,
    (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.json({ Error: err });
      } else {
        res.json({ "Created Done": result });
      }
    }
  );
});

// Error
app.post("/company", (req, res) => {
  let company: Company = req.body.company;
  connection.query(
    `
    INSERT INTO applicationform (userName, Password, Name, Description, PhoneNo, TrainerID, SupervisorID) VALUES
    ('${company.Username}', '${company.Password}', '${company.Name}','${company.Description}', '${company.PhoneNo}', '${company.TrainerID}', '${company.SupervisorID}');
    `,
    (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.json({ Error: err });
      } else {
        res.json({ Created: result });
      }
    }
  );
});

app.post("/tasklist", (req, res) => {
  let tasklist: TasksList = req.body.tasklist;
  connection.query(
    `
    INSERT INTO tasklist (Name, Date, Notes) VALUES
    ('${tasklist.Name}', '${tasklist.Date}', '${tasklist.Notes}');
    `,
    (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.json({ Error: err });
      } else {
        res.json({ Created: result });
      }
    }
  );
});

// Error
app.post("/trainee", (req, res) => {
  let trainee: Trainee = req.body.trainee;
  connection.query(
    `
    INSERT INTO trainee (UserName, Password, FName, LName, SupervisorID, DOB, TrainingHours, TaskListID) VALUES
    ('${trainee.Username}', '${trainee.Password}', '${trainee.FName}', '${trainee.LName}', '${trainee.SupervisorID}', '${trainee.DOB}', '${trainee.TrainingHours}', '${trainee.TaskListID}');
    `,
    (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.json({ Error: err });
      } else {
        res.json({ Created: result });
      }
    }
  );
});

// Error
app.post("/trainer", (req, res) => {
  let trainer: Trainer = req.body.trainer;
  connection.query(
    `
    INSERT INTO trainer (UserName, Email, Password, FName, LName, PhoneNo, TaskListID, TraineeID, Department) VALUES
    ('${trainer.Username}', '${trainer.Email}', '${trainer.Password}', '${trainer.FName}','${trainer.LName}', '${trainer.PhoneNo}', '${trainer.TaskListID}', '${trainer.TraineeID}', '${trainer.Department}');
    `,
    (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.json({ Error: err });
      } else {
        res.json({ Created: result });
      }
    }
  );
});

app.post("/unitrainingsupervisor", (req, res) => {
  let unitrainingsupervisor: University = req.body.unitrainingsupervisor;
  connection.query(
    `
    INSERT INTO unitrainingsupervisor (UserName, Password, SupervisorName, UniName, PhoneNo, TraineeID) VALUES
    ('${unitrainingsupervisor.Username}', '${unitrainingsupervisor.Password}', '${unitrainingsupervisor.SupName}','${unitrainingsupervisor.UniName}', '${unitrainingsupervisor.PhoneNo}', '${unitrainingsupervisor.TraineeID}');
    `,
    (err, result) => {
      if (err) {
        console.log("Error " + err);
        res.json({ Error: err });
      } else {
        res.json({ Created: result });
      }
    }
  );
});

// *****************
// Router put
// *****************

app.put("/editAppForm/:id", (req, res) => {
  let id = req.params["id"];
  let appform: ApplicaionForm = req.body.appform;

  connection.query(
    `UPDATE applicationform SET  
    FName='${appform.FName}', LName='${appform.LName}', PhoneNo='${appform.PhoneNo}', Addres='${appform.Addres}', 
    Email='${appform.Email}', university='${appform.university}' ,Field='${appform.Field}', ExpectedDOGrad='${appform.ExpectedDOGrad}', 
    TotalAvg='${appform.TotalAvg}', TypeOfTraining='${appform.TypeOfTraining}', DaysAvailable='${appform.DaysAvailable}', 
    HoursAvailable='${appform.HoursAvailable}', ReqTrainingHours='${appform.ReqTrainingHours}', SupervisorPhoneNo='${appform.SupervisorPhoneNo}'
    WHERE id=${id}`,
    (err, result) => {
      if (err) {
        res.status(404).json({ Error: err });
        console.log(err);
      } else {
        res.json({ Success: result });
      }
    }
  );
});

app.put("/editTasklist/:id", (req, res) => {
  let id = req.params["id"];
  let tasklist: TasksList = req.body.tasklist;

  connection.query(
    `UPDATE tasklist SET  
    Name='${tasklist.Name}', Date='${tasklist.Date}', Notes='${tasklist.Notes}' 
    WHERE id=${id}`,
    (err, result) => {
      if (err) {
        res.status(404).json({ Error: err });
        console.log(err);
      } else {
        res.json({ Success: result });
      }
    }
  );
});

// *****************
// Router delete
// *****************

app.delete("/tasklist/:id", (req, res) => {
  let id = req.params["id"];
  connection.query("DELETE FROM tasklist WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).json({ Error: err });
    } else {
      res.json({ success: result });
    }
  });
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

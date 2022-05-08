import mysql from 'mysql';

const db_config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gradproject'
}

export let connection: mysql.Connection;

export function handleDisconnect(){
    connection = mysql.createConnection(db_config);

    connection.connect(function(err){
        if(err){
            console.log("Error When connecting to database ", err);
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function(err){
        console.log("db error ", err);

        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            console.log("Inside the if err.code");
            handleDisconnect();
        }
        else{
            console.log("error connecting to database throw error");
            throw err;
        }
    });
}

handleDisconnect();



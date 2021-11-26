import DBConnection from "../configs/DBConnection";

let getUsers = () =>{
try {
    DBConnection.query(
        'SELECT * FROM gsjtyc89uqzt51ln.users ', 
        function(err, rows) {
            if (err) {
                reject(err)
            }
            let user = rows;
            resolve(user);
        }
    );
} catch (err) {
    reject(err);
};
};
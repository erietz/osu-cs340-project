// Get an instance of mysql we can use in the app
import mysql from "mysql";

// Create a 'connection pool' using the provided credentials
export const pool = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASSWORD,
    database        : process.env.DB_DATABASE
})

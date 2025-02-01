//begin the dotenv
import dotenv from "dotenv";
import pg from "pg";

//initalise .env file
dotenv.config ();

//create db pool to connect server with db using connection string
export const db= new pg.Pool({
    connectionString:process.env.DATABASE_URL,
});
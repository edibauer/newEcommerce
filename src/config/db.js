import { createPool } from "mysql2/promise";

// app
const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'MrRobot369',
    port: 3306,
    database: "store"

})

export default pool
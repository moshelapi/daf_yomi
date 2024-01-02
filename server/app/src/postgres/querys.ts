import { User } from "../utils/interfaces/user_interface.js";
import { query } from "./connectToDB.js";

const getAllUsers = async()=>{
    const users = await query('SELECT * FROM users', []);
    return users.rows.map(user => ({
      id: user.id,
      firstName: user.firstname , 
      lastName: user.lastname ,
      email: user.email ,
      password: user.password , 
      latitude: user.latitude ,
      longitude: user.longitude ,
      time: user.time ,
      title: user.title ,
      city: user.city ,
      street: user.street ,
      age: user.age 
    }));
}

const addUser = async (user: User) => {
  const sql = `
    INSERT INTO users ( firstName, lastName, email, password, latitude, longitude, time, title, city, street, age)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING id;`;

  const values = [ user.firstName, user.lastName, user.email, user.password, user.latitude,
     user.longitude, user.time, user.title, user.city, user.street, user.age, ];

  try {
    const result = await query(sql, values);
    console.log(`User added with UUID: ${result.rows[0].id}`);
    return result.rows[0].id
  } catch (err) {
    console.error('Error adding user:', err);
    throw err;
  }
};



 const postgresQuery = {
    getAllUsers,
    addUser
}

export default postgresQuery




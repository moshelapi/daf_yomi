var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { query } from "./connectToDB.js";
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield query('SELECT * FROM users', []);
    return users.rows.map(user => ({
        id: user.id,
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        password: user.password,
        latitude: user.latitude,
        longitude: user.longitude,
        time: user.time,
        title: user.title,
        city: user.city,
        street: user.street,
        age: user.age
    }));
});
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `
    INSERT INTO users ( firstName, lastName, email, password, latitude, longitude, time, title, city, street, age)
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING id;`;
    const values = [user.firstName, user.lastName, user.email, user.password, user.latitude,
        user.longitude, user.time, user.title, user.city, user.street, user.age,];
    try {
        const result = yield query(sql, values);
        console.log(`User added with UUID: ${result.rows[0].id}`);
        return result.rows[0].id;
    }
    catch (err) {
        console.error('Error adding user:', err);
        throw err;
    }
});
const postgresQuery = {
    getAllUsers,
    addUser
};
export default postgresQuery;
//# sourceMappingURL=querys.js.map
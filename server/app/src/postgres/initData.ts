import { query } from "./connectToDB.js";

const users = [
    {
      id: 1,
      firstName: "  דוד משה",
      lastName: "כהן",
      email: "moshe@example.com",
      password: "s3cr3t123",
      latitude: 32.109333,
      longitude: 34.855499,
      time: "08:00-10:00",
      title: "תורה",
      city: "תל אביב",
      street: "אבן גבירול",
      age: 30
    },
    {
      id: 2,
      firstName: "דוד",
      lastName: "לוי",
      email: "david@example.com",
      password: "p4ssw0rd456",
      latitude: 32.109333,
      longitude: 34.855499,
      time: "10:00-12:00",
      title: "גמרא",
      city: "תל אביב",
      street: "דיזנגוף",
      age: 25
    },
    {
      id: 3,
      firstName: "שרה",
      lastName: "איזנברג",
      email: "sarah@example.com",
      password: "myp4ss789",
      latitude: 32.109333,
      longitude: 34.855499,
      time: "12:00-14:00",
      title: "משנה",
      city: "תל אביב",
      street: "רוטשילד",
      age: 28
    },
    {
      id: 4,
      firstName: "רחל",
      lastName: "גולדברג",
      email: "rachel@example.com",
      password: "r4ch3lPass",
      latitude: 32.109333,
      longitude: 34.855499,
      time: "14:00-16:00",
      title: "תורה",
      city: "תל אביב",
      street: "הרצל",
      age: 32
    },
    {
      id: 5,
      firstName: "אבי",
      lastName: "מזרחי",
      email: "avi@example.com",
      password: "avi12345",
      latitude: 32.794044,
      longitude: 34.989571,
      time: "08:00-10:00",
      title: "תורה",
      city: "חיפה",
      street: "הרצל",
      age: 29
  },
  {
      id: 6,
      firstName: "ליאת",
      lastName: "שלום",
      email: "liat@example.com",
      password: "liat12345",
      latitude: 31.771959,
      longitude: 35.217018,
      time: "10:00-12:00",
      title: "גמרא",
      city: "ירושלים",
      street: "קינג ג'ורג'",
      age: 26
  },
  {
      id: 7,
      firstName: "יעקב",
      lastName: "כהן",
      email: "yaakov@example.com",
      password: "yaakov123",
      latitude: 31.252973,
      longitude: 34.791462,
      time: "12:00-14:00",
      title: "משנה",
      city: "באר שבע",
      street: "רגר",
      age: 31
  },
  {
      id: 8,
      firstName: "נעמי",
      lastName: "לוין",
      email: "naomi@example.com",
      password: "naomi1234",
      latitude: 32.068424,
      longitude: 34.824785,
      time: "14:00-16:00",
      title: "תורה",
      city: "רמת גן",
      street: "ביאליק",
      age: 27
  },
  {
      id: 9,
      firstName: "דן",
      lastName: "שפירא",
      email: "dan@example.com",
      password: "dan12345",
      latitude: 32.162413,
      longitude: 34.844675,
      time: "16:00-18:00",
      title: "תורה",
      city: "הרצליה",
      street: "בן גוריון",
      age: 34
  }, {
    id: 10,
    firstName: "עומר",
    lastName: "גל",
    email: "omer@example.com",
    password: "omer12345",
    latitude: 32.809543,
    longitude: 34.988522,
    time: "08:00-10:00",
    title: "משנה",
    city: "קריית אתא",
    street: "ההגנה",
    age: 28
},
{
    id: 11,
    firstName: "שרון",
    lastName: "פרץ",
    email: "sharon@example.com",
    password: "sharon12345",
    latitude: 31.668789,
    longitude: 34.574252,
    time: "10:00-12:00",
    title: "גמרא",
    city: "אשדוד",
    street: "שד' ירושלים",
    age: 32
},
{
    id: 12,
    firstName: "יוסי",
    lastName: "אהרוני",
    email: "yossi@example.com",
    password: "yossi12345",
    latitude: 32.184781,
    longitude: 34.871326,
    time: "12:00-14:00",
    title: "תורה",
    city: "רעננה",
    street: "אחוזה",
    age: 35
},
{
    id: 13,
    firstName: "דנה",
    lastName: "קורן",
    email: "dana@example.com",
    password: "dana12345",
    latitude: 31.890267,
    longitude: 34.807651,
    time: "14:00-16:00",
    title: "תורה",
    city: "רחובות",
    street: "הרצל",
    age: 30
},
{
    id: 14,
    firstName: "עידן",
    lastName: "רז",
    email: "idan@example.com",
    password: "idan12345",
    latitude: 31.973001,
    longitude: 34.792501,
    time: "16:00-18:00",
    title: "גמרא",
    city: "רמלה",
    street: "הרצל",
    age: 27
},  {
  id: 15,
  firstName: "נעה",
  lastName: "כהן",
  email: "noa@example.com",
  password: "noa12345",
  latitude: 32.178195,
  longitude: 34.90761,
  time: "08:00-10:00",
  title: "תורה",
  city: "נתניה",
  street: "שדרות ויצמן",
  age: 29
},
{
  id: 16,
  firstName: "איתן",
  lastName: "לוי",
  email: "eitan@example.com",
  password: "eitan12345",
  latitude: 31.892773,
  longitude: 34.811272,
  time: "10:00-12:00",
  title: "גמרא",
  city: "נס ציונה",
  street: "הרצל",
  age: 33
},
{
  id: 17,
  firstName: "תמר",
  lastName: "שפירא",
  email: "tamar@example.com",
  password: "tamar12345",
  latitude: 32.068424,
  longitude: 34.824785,
  time: "12:00-14:00",
  title: "משנה",
  city: "גבעתיים",
  street: "שד' יצחק רבין",
  age: 27
},
{
  id: 18,
  firstName: "עמית",
  lastName: "פרידמן",
  email: "amit@example.com",
  password: "amit12345",
  latitude: 31.25181,
  longitude: 34.7913,
  time: "14:00-16:00",
  title: "תורה",
  city: "מודיעין",
  street: "עמק דותן",
  age: 36
},
{
  id: 19,
  firstName: "מיכל",
  lastName: "סגל",
  email: "michal@example.com",
  password: "michal12345",
  latitude: 31.79645,
  longitude: 35.17529,
  time: "16:00-18:00",
  title: "תורה",
  city: "מעלה אדומים",
  street: "שד' יצחק רבין",
  age: 30
},
{
  id: 20,
  firstName: "יונתן",
  lastName: "בר",
  email: "yonatan@example.com",
  password: "yonatan12345",
  latitude: 31.969015,
  longitude: 34.772209,
  time: "18:00-20:00",
  title: "גמרא",
  city: "ראשון לציון",
  street: "רוטשילד",
  age: 28
},
{
  id: 21,
  firstName: "אורי",
  lastName: "הרשקוביץ",
  email: "uri@example.com",
  password: "uri12345",
  latitude: 32.497674,
  longitude: 34.908595,
  time: "20:00-22:00",
  title: "משנה",
  city: "זכרון יעקב",
  street: "המייסדים",
  age: 31
}
  ];
  

  export async function initializeDatabase() {
    try {
      await query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`,[])
      const tableCheckResult = await query("SELECT to_regclass('public.users');", []);
      if (tableCheckResult.rows[0].to_regclass === null) {
        await query(`
          CREATE TABLE users (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            firstName VARCHAR(255),
            lastName VARCHAR(255),
            email VARCHAR(255),
            password VARCHAR(255),
            latitude NUMERIC,
            longitude NUMERIC,
            time VARCHAR(255),
            title VARCHAR(255),
            city VARCHAR(255),
            street VARCHAR(255),
            age INTEGER
          );
        `, []);
          for (const user of users) {
          await query(
            'INSERT INTO users (firstName, lastName,  email, password, latitude, longitude, time, title, city, street, age) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
            [user.firstName, user.lastName,  user.email, user.password, user.latitude, user.longitude, user.time, user.title, user.city, user.street, user.age]
          );
        }
        console.log('Database initialized');
      } else {
        console.log('Users table already exists');
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }
  
  
  
import pg from "pg";

interface QueryResultRow {
  id: any;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  latitude: number;
  longitude: number;
  time: string;
  title: string;
  city: string;
  street: string;
  age: number;
  to_regclass: string | null;
}

interface QueryResult {
  [x: string]: any;
  rows: QueryResultRow[];
}

const {Pool} = pg
const pool = new Pool({
    user: 'moshe',
    password: 'moshe206',
    host: 'postgres', 
    port: 5432,
    database: 'conect'
  });
  

  export const query = async (text: string, params: any[]): Promise<QueryResult> => {
    const result = await pool.query(text, params);
    return result; // This is now typed as QueryResult
  };
  
  
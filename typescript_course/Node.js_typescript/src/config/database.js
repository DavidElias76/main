// using the postgreSQL as the database

import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'mydb',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;

// Import reflect-metadata once at app startup.- in the server.ts file 


// / src/server.ts
// import { AppDataSource } from './config/database.js';

// AppDataSource.initialize()
//   .then(() => {
//    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
//   })
//   .catch((err) => {
//    console.error('DB init error', err);
//    process.exit(1);
//   });
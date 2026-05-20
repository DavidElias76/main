
// npm install typeorm reflect-metadata pg - This package allows the use of postgreSQL as the database

// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// @Entity('users')
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ unique: true })
//   username: string;

//   @Column({ unique: true })
//   email: string;

//   @Column({ select: false })
//   password: string;

//   @Column({ default: 'user' })
//   role: string;

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;
// }
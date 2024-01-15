import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export
class User {
@PrimaryGeneratedColumn()
id: number;

@Column()
firstName: string;

@Column()
lastName: string;

@Column()
email: string;

@Column()
password: string; 

@Column('double precision')
latitude: number;

@Column('double precision')
longitude: number;

@Column()
time: string;

@Column()
title: string;

@Column()
city: string;

@Column()
street: string;

@Column()
age: number;
}
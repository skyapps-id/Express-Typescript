import { ConnectionOptions } from "typeorm";
import { User, Post, Comment } from '../models'

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.POSTGRES_HOST || "192.168.100.80",
  port: Number(process.env.POSTGRES_PORT) || 3306,
  username: process.env.POSTGRES_USER || "mysqluser",
  password: process.env.POSTGRES_PASSWORD || "",
  database: process.env.POSTGRES_DB || "express-typescript",
  entities: [User, Post, Comment],
  synchronize: true,
};

export default config;
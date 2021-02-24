import "reflect-metadata";
import { createConnection } from "typeorm";
import { app } from './app'
import { AddressInfo } from 'net'

import dbConfig from "./config/database";

const PORT = process.env.PORT || 8000;

/* const server = app.listen(8000, '0.0.0.0', () => {
	const {port, address} = server.address() as AddressInfo;
	console.log('Server listening on:','http://' + address + ':'+port);
}); */

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
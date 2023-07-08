import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import nodemailer from "nodemailer";
// import mysql from "mysql";
// import session from "express-session";
import { db } from "../connect.js";

export const userLogin = async (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM admin_register WHERE username = ?",
    [username],
    (err, result) => {
      console.log(result);
      if (err) {
        return console.log("login error in server");
      }
      // console.log(result);
      if (result.length > 0) {
        bcrypt.compare(
          password.toString(),
          result[0].password,
          (err, response) => {
            if (err) return console.log("password compare errror");

            if (response) {
              return res.send({ status: "success" });
            } else {
              return console.log("password not matched");
            }
          }
        );

        console.log("Login successfully");
      } else {
        res.json("no user found");
      }
    }
  );
};

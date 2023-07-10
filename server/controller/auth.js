import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../connect.js";

const jwtKey = "e-com";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export const userLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM signup WHERE username = ?",
    [username],
    async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
      } else if (result.length > 0) {
        try {
          const passwordMatch = await bcrypt.compare(
            password,
            result[0].password
          );

          if (passwordMatch) {
            const token = jwt.sign({ username }, jwtKey);
            console.log(token);
            return res
              .status(200)
              .send({ msg: "successfully login", token, result });
          } else {
            return res
              .status(401)
              .json({ message: "Wrong username/password combination!" });
          }
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error" });
        }
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    }
  );
};

export const userRegs = async (req, res) => {
  try {
    const { username, email, phoneno, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const x = hashedPassword;

    const Comp = phoneno;
    const hash = x;

    bcrypt.compare(Comp, hash, function (err, result) {
      if (result) {
        console.log("The password matches the hash.");
      } else {
        console.log("The password does not match the hash.");
      }
    });

    const sql = `INSERT INTO signup (username, email, phoneno, password) VALUES (?, ?, ?, ?)`;
    const values = [username, email, phoneno, hashedPassword];

    db.query(sql, values, (err, data) => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).json({ message: "Error" });
      } else {
        return res.status(200).send({ msg: "User registration successful" });
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

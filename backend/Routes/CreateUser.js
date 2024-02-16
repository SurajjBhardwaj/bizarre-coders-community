import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
import express from "express";
import jwt from "jsonwebtoken";
import user from "../models/User.js";
import Registration from "../models/registration.js"
import nodemailer from "nodemailer";
import { dblClick } from "@testing-library/user-event/dist/click.js";

const router = express.Router();
const jwtSecret = "MyNameisSakaKamalNayan";

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 5 }),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPassword = await bcrypt.hash(req.body.password, salt);

      await user.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

router.post("/registration", async (req, res) => {

  try {
    const { name, email, phoneNo, rollNo, year, branch, anyDoubt } = req.body;
    if (!name || !email || !phoneNo || !rollNo || !year || !branch || !anyDoubt) {
      
      return res.status(400).json({ errors: "Please fill all the fields" });

    }

    const alreadyRegister = await Registration.findOne({ $and: [{ email }, { phoneNo }] });
    if (alreadyRegister) {
      return res.status(400).json({ errors: "You have already registered" });
    }

    

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 25,
      secure:true,
      auth: {
        user: process.env.user,
        pass: process.env.pass
      },
    });

    const mailOptions = {
      from: process.env.user,
      to: email,
      subject: 'Congratulation! 🥳 Registration Successful',
      html: `<h1>Hello ${name},</h1><p>Your registration is successful.</p> 
      <p>Thank you for registering. we are excited to See You at the event on 21st feb.</p> 
      <p>For any queries, you can contact us at bizarre.coders@gmail.com </p>
      <p>Regards, <br> Bizarre Coders</p>`
    };

    transporter.sendMail(mailOptions);
    const newRegistration = new Registration({
      name,
      email,
      phoneNo,
      rollNo,
      year,
      branch,
      anyDoubt,
    });
    await newRegistration.save();

  

    

    return res.status(200).json({ message: "registration Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error.message });
  }
});


router.post(
  "/loginuser",
  [
    body("email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const userData = await user.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Invalid email or password." });
      }

      const pwdCompare = await bcrypt.compare(password, userData.password);

      if (!pwdCompare) {
        return res.status(400).json({ errors: "Invalid email or password." });
      }

      const payload = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(payload, jwtSecret);

      res.json({ success: true, token: authToken });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

export default router;

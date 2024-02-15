import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
import express from "express";
import jwt from "jsonwebtoken";
import user from "../models/User.js";

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

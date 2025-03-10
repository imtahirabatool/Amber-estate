import express from "express";
import {
  createListing,
  getSingleListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createListing);
router.get("/get/:id", getSingleListing);

export default router;

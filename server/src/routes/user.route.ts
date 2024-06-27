import express, { Router } from "express";
import { createUser, getAllUsers } from '../controllers/user.controller';

const router: Router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);

module.exports = router;
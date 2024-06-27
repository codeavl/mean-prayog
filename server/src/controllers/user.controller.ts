import mongoose from "mongoose";
import { Request, Response } from "express";

import { UserModel } from '../models/user.model';

export const getAllUsers = async (request: Request, response: Response) => {
    try {
        const users = await UserModel.find();
        return response.status(200).json(users);
    } catch(error) {
        return response.status(500).json({ error: error.message });
    }
};

export const createUser = async (request: Request, response: Response) => {
    try {
        const newUser = await UserModel.create(request.body);
        return response.status(200).json(newUser);
    } catch(error) {
        return response.status(500).json({ error: error.message });
    }
}
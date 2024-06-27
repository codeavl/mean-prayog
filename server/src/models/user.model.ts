import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true }
});

export const UserModel = mongoose.model('User', UserSchema);



// export const getUsers = () => UserModel.find(); 
// export const getUserById = (id: string) => UserModel.findById(id);
// export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
// export const deleteUser = (id: string) => UserModel.findOneAndDelete({ _id: id });
// export const updateUser = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);
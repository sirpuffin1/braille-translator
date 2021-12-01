import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const translationSchema = new Schema({
    message: String
});
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    translations: [translationSchema]
});
export const UserModel = model('User', userSchema);
//# sourceMappingURL=user.schema.js.map
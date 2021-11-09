import * as mongoose from 'mongoose';
import { Translation } from './translation.model.js';

export interface User {
    _id?:{type: mongoose.Types.ObjectId}
    name: string,
    email: string,
    password?: string,
    translations: Translation[]
}
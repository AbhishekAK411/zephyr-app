import mongoose, { Schema, Document } from "mongoose";

enum userRole{
    ContentCreator = "Content Creator",
    Reader = "Reader"
}

interface Iuser extends Document{
    username: string,
    email: string,
    password: string,
    role: userRole,
    posts: Array<Object>
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) =>{
                if(value.length < 5){
                    throw new Error("Username should be at least 5 characters long.");
                }
                if(/\s/.test(value)){
                    throw new Error("Username should not contain any spaces.");
                }
                if(!/^[A-Za-z0-9]/.test(value)){
                    throw new Error("Username should have uppercase and lowercase characters.");
                }
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(userRole),
        default: userRole.Reader
    },
    posts: {
        type: [Object]
    }
})

export default mongoose.model<Iuser>("User", userSchema);
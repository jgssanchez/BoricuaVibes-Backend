const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    
    name: { type: String, required: [true, 'El nopmbre es obligatorio'] },
    lastName: { type: String, required: [true, 'El apellido es obligatorio'] },
    email: { type: String, required: [true, 'El email es obligatorio'], unique: true },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    role: { type: String, enum: ['admin', 'user'] , default: 'user' },
    verified: { type: Boolean, default: false },
})


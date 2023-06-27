import User from '../models/User.js';

//Register

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const isUsed = await User.findOne({ username });
        if (isUsed) {
            return res.json({
                message: 'Данный username уже занят',
            });
        }
    } catch (e) {}
};
//login
export const login = async (req, res) => {
    try {
    } catch (e) {}
};
//get me
export const getMe = async (req, res) => {
    try {
    } catch (e) {}
};

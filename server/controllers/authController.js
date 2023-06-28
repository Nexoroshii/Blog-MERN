import User from "../models/User.js";

//Register

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });
    if (isUsed) {
      return res.json({
        message: "Данный username уже занят",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hash,
    });

    await newUser.save();
    return res.json({
      newUser,
      message: "Пользователь успешно зарегистрирован",
    });
  } catch (e) {
    res.json({ message: "Ошибка при создании пользователя." });
  }
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

import Post from "../models/Post.js";
import User from "../models/User.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

//Create Post

export const createPost = async (req, res) => {
  try {
    const { title, text } = req.body;
    const user = await User.findById(req.userId);

    if (req.files) {
      let fileName = Date.now().toString() + req.files.image.name;
      const __dirname = dirname(fileURLToPath(import.meta.url));
      req.files.image.mv(path.join(__dirname, "..", "uploads", fileName));

      const newPostWithImage = new Post({});
    }
  } catch (error) {
    console.log(error);
  }
};

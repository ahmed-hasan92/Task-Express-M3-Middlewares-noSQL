const Post = require("../../models/Post");

exports.postsCreate = async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res, next) => {
  try {
    await req.post.deleteOne();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  try {
    await req.post.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
exports.fetchOneById = async (next, id) => {
  try {
    const post = await Post.findById(id);
    if (post) {
      return post;
    } else {
      next({ message: "post not found" });
    }
  } catch (error) {
    next(error);
  }
};

const { validationResult } = require('express-validator');
const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    Post.findAndCountAll()
        .then(posts => {
            const postRows = posts.rows;
            const total = posts.count;

            res.status(200).json({
                posts: postRows,
                total
            });
        })
        .catch( err => {
            console.log(err);
        });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Validation failed. Length too short.',
            errors: errors.array()
        })
    }
    res.status(201).json({
        data: [
            {
                message: "Post created successfully",
                post: {
                    content: req.body.content
                }
            }
        ]
    });
};

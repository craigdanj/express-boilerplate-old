const { validationResult } = require('express-validator');
const postModel = require('../models/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {content: "The first post"},
            {content: "The second post"}
        ]
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

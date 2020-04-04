exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {content: "The first post"},
            {content: "The second post"}
        ]
    });
};

exports.createPost = (req, res, next) => {
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

const router = require('express').Router();
const { BlogPost } = require('../../model');
const withAuth = require('../../utils/auth')

//POST - create blog posts
router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        console.log(newBlogPost);
        res.status(200).json(newBlogPost);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

//PUT - update/edit blog posts
router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })

        if (!blogPostData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        };

        res.status(200).json(blogPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//DELETE - delete posts
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if(!blogPostData) {
            res.status(404).json({ message: 'No post found with this id!' });
        };

        res.status(200).json(blogPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
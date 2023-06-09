const router = require('express').Router();
const { User, BlogPost, Comment } = require('../model');
const withAuth = require('../utils/auth');

//GET - render all BlogPosts + associated User on homepage
router.get('/', async (req, res) => {
    try {
        const postData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                    
                },
            ]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        // res.json(posts);

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//GET - get 1 BlogPost + associated User + associated Comment
router.get('/blogpost/:id', async (req, res) => {
    try {
        const postData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    include: [{ model: User, attributes: ['username'] }],
                }
            ],
        });

        const post = postData.get({ plain: true });

        // res.json(post);

        res.render('blogPost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET - render BlogPost that I wrote (can edit and delete post)
router.get('/my-post/:id', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    include: [{ model: User, attributes: ['username'] }]
                }
            ],
        });

        const post = postData.get({ plain: true });

        // res.json(post);

        res.render('myPost', {
            post,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//GET - get 1 User + all associated BlogPosts
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: BlogPost }],
        });

        const user = userData.get({ plain: true });

        // res.json(user);

        res.render('dashboard', {
            user,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET - render page to edit post
router.get('/edit-post/:id', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.findByPk(req.params.id);

        const post = postData.get({ plain: true });

        //res.json(post);

        res.render('editPost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

//render log in form
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    };

    res.render('login');
});

//render sign up form
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    };
    
    res.render('signup');
})

//renders form to add new post
router.get('/new-post', withAuth, (req, res) => {
    res.render('addPost', { logged_in: req.session.logged_in });
})


module.exports = router;
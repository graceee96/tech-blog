const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

//GET - get all BlogPosts + associated User

//GET - get 1 BlogPost + associated User + associated Comment

//GET - get 1 User + all associated BlogPosts

//prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Project }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('profile', {
//         ...user,
//         logged_in: true
//     });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});
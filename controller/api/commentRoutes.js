const router = require('express').Router();
const { Comment } = require('../../model');
const withAuth = require('../../utils/auth');

//POST - create comments
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// //PUT - update/edit comments
// router.put('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.update(req.body, {
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id
//             }
//         });

//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found with this id!' });
//             return;
//         };

//         res.status(200).json(commentData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// })

// //DELETE - delete comments
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//         const commentData = await Comment.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id
//             }
//         });

//         // if(!commentData) {
//         //     res.status(404).json({ message: 'No comment found with this id!' });
//         // };

//         // res.status(200).json(commentData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;
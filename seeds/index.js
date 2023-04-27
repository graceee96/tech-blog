const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../model');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // const users = await userData.map(user => {
    //     return User.create(user, {
    //         individualHooks: true,
    //         returning: true,
    //     });
    // });

    const user1 = await User.create(userData[0], {
        individualHooks: true,
        returning: true,
    });

    const user2 = await User.create(userData[1], {
        individualHooks: true,
        returning: true,
    });

    const user3 = await User.create(userData[2], {
        individualHooks: true,
        returning: true,
    });

    const user4 = await User.create(userData[3], {
        individualHooks: true,
        returning: true,
    });

    const blogPosts = await BlogPost.bulkCreate(blogPostData);

    const comments = await Comment.bulkCreate(commentData)

    process.exit(0);
}

seedDatabase();


const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../model');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const blogPosts = await BlogPost.bulkCreate(blogPostData, {
        returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
        returning: true,
    })

    process.exit(0);
}

seedDatabase();


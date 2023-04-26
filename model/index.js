const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

//User has MANY BlogPosts
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//but BlogPosts only has ONE User
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
});

//User has MANY Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//but Comments only has ONE User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

//BlogPost has MANY Comments
BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: 'CASCADE',
});

//but Comments only has ONE BlogPost
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id',
});

module.exports = { User, BlogPost, Comment };
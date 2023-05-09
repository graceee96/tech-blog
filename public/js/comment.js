//fetch request for adding comments to /api/comments
const addComment = async (event) => {
    event.preventDefault();
    console.log(event.target);

    const comment = document.querySelector('#new-comm').value.trim();
    console.log(comment)

    const currentURL = location.href;
    const blogPostID = currentURL.split('/').pop();

    console.log(location.href)
    console.log(blogPostID)

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment, blogpost_id: blogPostID }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('new comment!')
            document.location.reload();
        } else {
            alert('Failed to add new comment!')
        }
    }
}

//fetch request to update comment to /api/comments/:id
const editComment = async (event) => {
    
    event.preventDefault();
    console.log(event.target)

    const commentBody = document.querySelector('#comment-30').value;
    console.log(commentBody)
}

//fetch request to delete comment to /api/comments/:id
const deleteComment = async (event) => {
    // event.preventDefault();
    console.log(event.target)

    // if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id)

        const response = await fetch(`/api/comments/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        console.log(response);
        // window.location.reload(true);
        // history.go(0)
        
        if (response.ok) {
            console.log('string deleted')
            window.location.href = window.location.href
        } else {
            alert('Failed to delete comment')
        }
    // }
}

//event listener for adding comments
document.querySelector('#addcomment-btn').addEventListener('click', addComment)

//event listener for updating comments
document.querySelector('#edit-btn').addEventListener('click', editComment)

//event listener for deleting comments
document.querySelector('#delete-btn').addEventListener('click', deleteComment);
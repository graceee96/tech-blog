//fetch request for adding comments to /api/comments
const addComment = async (event) => {
    event.preventDefault();
    console.log(event.target);

    const comment = document.querySelector('#new-comment').value.trim();

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log('new comment!')
        } else {
            alert('Failed to add new comment!')
        }
    }
}

//fetch request to update comment to /api/comments/:id
const editComment = async (event) => {
    event.preventDefault();
}

//fetch request to delete comment to /api/comments/:id
const deleteComment = async (event) => {
    event.preventDefault();
    console.log(event.target)

    // if (event.target.hasAttribute('data-id')) {
    //     const id = event.target.getAttribute('data-id');

    //     const res = await fetch(`/api/comments/${id}`, {
    //         method: 'DELETE',
    //     });

    //     if (res.ok) {
    //         document.location.replace('/blogpost')
    //     } else {
    //         alert('Failed to delete comment')
    //     }
    // }
}

//event listener for adding comments
document.querySelector('#addcomment-btn').addEventListener('submit', addComment)

//event listener for updating comments

//event listener for deleting comments
// document.querySelector('#comment-list').addEventListener('click', deleteComment);
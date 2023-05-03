// fetch request to delete post /api/blogposts/:id
const deletePost = async(event) => {    
    event.preventDefault();
    console.log(event.target);

    if (event.target.getAttribute('data-postid')) {
        const id = event.target.getAttribute('data-postid');

        const response = await fetch(`/api/blogposts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
}

//event listener to delete post
document.querySelector('#deletepost-btn').addEventListener('click', deletePost)
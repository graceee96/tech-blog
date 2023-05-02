//fetch request to add new post to /api/blogposts
const newPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#addpost-title').value.trim();
    const content = document.querySelector('#addpost-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogposts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create new blog post');
            console.log(response)
        };
    }
}

//character counter

//event listener
document.querySelector('.addpost-form').addEventListener('submit', newPost);
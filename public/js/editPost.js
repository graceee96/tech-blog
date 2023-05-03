//character counter
let blogContent = document.getElementById('editpost-content');
let characters = document.getElementById('character');
let currentCharactersLeft = 255 - blogContent.value.length;
characters.textContent = currentCharactersLeft;

//fetch request to update new post to /api/blogposts/:id
const editPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#editpost-title').value.trim();
    const content = document.querySelector('#editpost-content').value.trim();
    console.log(event.target);

    if (event.target.getAttribute('data-postid')) {
        const id = event.target.getAttribute('data-postid');
        
        if (title && content) {
            const response = await fetch(`/api/blogposts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to update blog post');
                console.log(response)
            };
        }
    }
}

//event listener for character counter
blogContent.addEventListener('input', () => {
    let charactersLeft = 255 - blogContent.value.length;

    characters.textContent = charactersLeft;
})

//event listener to edit post
document.querySelector('.editpost-form').addEventListener('submit', editPost);
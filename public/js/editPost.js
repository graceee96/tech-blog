//fetch request to update new post to /api/blogposts
const editPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#editpost-title').value.trim();
    const content = document.querySelector('#editpost-content').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogposts/:id', {
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

//character counter
let blogContent = document.getElementById('editpost-content');
let characters = document.getElementById('character');
let currentCharactersLeft = 255 - blogContent.value.length;
characters.textContent = currentCharactersLeft;

blogContent.addEventListener('input', () => {
    let charactersLeft = 255 - blogContent.value.length;

    characters.textContent = charactersLeft;
})

//event listener
document.querySelector('.editpost-form').addEventListener('submit', editPost);
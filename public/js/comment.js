//character counter
let commentContent = document.getElementsByClassName('comment-text');
let characters = document.getElementsByClassName('characters');
let currentCharactersLeft = 255 - commentContent.value.length;
characters.textContent = currentCharactersLeft;

//fetch request to update comment to /api/comments/:id

//fetch request to delete comment to /api/comments/:id

//event listener for character counter
commentContent.addEventListener('input', () => {
    let charactersLeft = 255 - commentContent.value.length;

    characters.textContent = charactersLeft;
})

//event listener for updating comments

//event listener for deleting comments
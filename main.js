  function mouse_position(e)
{
  posX = e.clientX;
  posY = e.clientY;
  const cursorBg = document.querySelector('.circle')
setTimeout(() => {
  cursorBg.style.top = `${posY}px`
  cursorBg.style.left = `${posX}px`
}, 1);
  const newCursor = document.querySelector('.dot')
  newCursor.style.top = `${posY}px`
  newCursor.style.left = `${posX}px`

const white = document.querySelector('.white');
white.addEventListener('mouseenter', function(e) {
  cursorBg.style.border = "1px solid black"
  newCursor.style.backgroundColor = '#000'
})

const black = document.querySelector('.black');
black.addEventListener('mouseenter', function(e) {
  cursorBg.style.border = "1px solid white"
  newCursor.style.backgroundColor = '#fff'
})

}

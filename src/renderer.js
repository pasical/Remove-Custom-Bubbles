remove_cumstom_bubbles.updateStyle((event, id, data) => {
  let style = document.querySelector(`style[id="${id}"]`)

  if (!style) {
    style = document.createElement('style')
    style.id = id
    document.head.appendChild(style)
  }

  style.textContent = data
})

remove_cumstom_bubbles.rendererReady()

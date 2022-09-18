function keyUpFunction(inputElement) {
    console.log('element.value:', inputElement.value)

    let newElement = document.createElement('p')
    newElement.innerText = inputElement.value
    let nameElement =
    document.getElementById('name')
    nameElement.appendChild(newElement)
}
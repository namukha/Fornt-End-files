for(i = 1; i <= 15; i++){
    let main = document.querySelector("select")
    const randomWord = Math.random().toString(36).substr(1,10)
    main.innerHTML += `<option value="${randomWord}">${randomWord}</option>`
}
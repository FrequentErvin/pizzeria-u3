const createFooter = function(){
    const footer = document.createElement("footer")
    const madeBy = document.createElement("div")
    madeBy.setAttribute("id","gitLink")
    const gitLogo = document.createElement("i")
    gitLogo.classList.add("fab")
    gitLogo.classList.add("fa-github")
    const madeByText = document.createElement("p")
    madeByText.textContent = "Ervin"
        
    madeBy.append(gitLogo, madeByText)
    footer.append(madeBy)
    return footer;
}
export default createFooter
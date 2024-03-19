import {all} from '../assets/images/prepareData.js'
const searchInputs = document.querySelectorAll('.search_input')
const searchIcons = document.querySelectorAll(".search_icon")

searchInputs.forEach((search) => {
    search.addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {           
            const valueToSearch = search.value
            search.value = "" 

            searchItem(valueToSearch)
        }
    })
})

searchIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const valueToSearch = icon.parentElement.querySelector('.search_input').value
        icon.parentElement.querySelector('.search_input').value = ""

        searchItem(valueToSearch)
    })
})

const searchItem = (string) => {

    let result = new Set()
    string = string.split(" ")
    all.forEach(item => {
        string.forEach(subString => {
            if (item.ten.toLowerCase().includes(subString.toLowerCase())) {
                result.add(item)
            }
        })
    })
    result = {
        key: string.join(" "),
        data: [...result]
    } 
    
    localStorage.setItem('searchResult', JSON.stringify(result))
    if (window.location.href.split('/').pop() == 'index.html') {
        window.location.href = "./pages/searchProductResult.html"
        return;
    }
    window.location.href = "../pages/searchProductResult.html"
}
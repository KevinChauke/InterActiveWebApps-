// After declaring and iporting the objects from the "data.js" file, We now need to import the data.
import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

// This are the variables that will be used.
let matches = books;
let page = 1;
const range = [0, BOOKS_PER_PAGE];

// Comparison so it can show an Error message. 
if (!books || !Array.isArray(books)) throw new Error('Source required') 
if (!range || range.length < 2) throw new Error('Range must be an array with two numbers')

// I created an object for the themes so that I can be able to change the theme from dark to light.
const themeColor = {
    day : {
        dark: '10, 10, 20',
        light: '255, 255, 255'
    },
    night : {
        dark: '255, 255, 255',
        light: '10, 10, 20'
    }

}


// declared a variable called fragent to hold the books
const fragment = document.createDocumentFragment()
let extracted = books.slice(0, BOOKS_PER_PAGE)      // this will show 36 book previews at a time.

// I created a function called preview which will call the elements from the HTML file so that the user can be able to preview the books.
// since the variables are = props, the we need to set the parameter to props
const createPreview = (props) => {
    const {author, id, image, title} = props

    const element = document.createElement("button");
    element.classList.add("preview");
    element.dataset.preview = id;
    element.innerHTML = /* html */ `
    <img 
        class="preview__image" 
        src="${image}" 
    />
    <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
    </div>
    `;
    return element
};

//loop for the preview of books
for (const books of extracted) {
    const preview = createPreview(books)
    fragment.appendChild(preview)
}

document.querySelector("[data-list-items]").appendChild(fragment);

// Created a showmoreButton so that the user can load more books
/*
  in oder to use the button, we need a query selector to load the button from the html file, 
  we also need a function called updateRemaining so that when the button is clicked, the code will load 36 more books.
  
*/

const ShowMoreB = document.querySelector('[data-list-button]')

const updateRemaining = () => {
    const remaining = books.length - (BOOKS_PER_PAGE * page)
    return remaining;
}

const showMore = (event) => {
    event.preventDefault()
    page += 1
    const remaining = updateRemaining()
    const hasRemaining = remaining > 0 ? remaining : 0

    const rangeStart = (page - 1) * BOOKS_PER_PAGE
    const rangeEnd = books.length - remaining
    extracted = books.slice(rangeStart, rangeEnd)

    if (hasRemaining > 0) {
        for (const books of extracted) {
            const preview = createPreview(books)
            fragment.appendChild(preview)
        }
        
        document.querySelector("[data-list-items]").appendChild(fragment);

        const previewList = document.querySelectorAll('.preview')
        const previewArray = Array.from(previewList)
        for (const preview of previewArray) {
            preview.addEventListener('click', activePreview)
        }
    }
};

// An event listener that will load more books when the showmore button is clicked 
ShowMoreB.addEventListener("click", showMore) 

ShowMoreB.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">
        (${updateRemaining()})
    </span>
`;

/*
    This is the summary of each book which will be show when a user clicks on the book.
    we use queryselector to load the summary of each book book from the html file
*/
const summary = document.querySelector('[data-list-active]')
const summaryClose = document.querySelector('[data-list-close]')
const summaryBackground = document.querySelector('[data-list-blur]')
const summaryImage = document.querySelector('[data-list-image]')
const summaryTitle = document.querySelector('[data-list-title]')
const summarySubtitle = document.querySelector('[data-list-subtitle]')
const summaryDescription = document.querySelector('[data-list-description]')

const activePreview = (event) => {
    event.preventDefault()
    let active

    const bookPreview = event.target.closest('.preview')
    const bookPreviewId = bookPreview.getAttribute('data-preview');
    
    for (const book of books) {
        if (active) break

        if (book.id === bookPreviewId) {
            active = book
        }
    }

    if (!active) return

    const { title, image, description, published, author } = active
    summary.showModal()
    summaryBackground.src = image
    summaryImage.src = image
    summaryTitle.innerText = title
    summarySubtitle.innerText = `${authors[author]} (${new Date(published).getFullYear()})`
    summaryDescription.innerText = description
    
    summaryClose.addEventListener('click', () => {
        summary.close()
    })
}

const previewList = document.querySelectorAll('.preview')
const previewArray = Array.from(previewList)
for (const preview of previewArray) {
    preview.addEventListener('click', activePreview)
}

//elements in the search form displays that displays genre
//For the search button, the overlay needed to display genre and author options, to achieve this, multiple elements needed to be appended to the DOM,
const genresFragment = document.createDocumentFragment()
const genresOption = document.createElement('option')
genresOption.value = 'any'
genresOption.innerText = 'All Genres'
genresFragment.appendChild(genresOption)

// this for loop is used to generate a drop down menu of options to choose genres from
for (const genre in genres) {
    const genresOption = document.createElement('option')
    genresOption.value = genres[genre]
    genresOption.innerText = genres[genre]
    genresFragment.appendChild(genresOption)
}

document.querySelector('[data-search-genres]').appendChild(genresFragment)

//elements in the search form displays that displays authors.
const authorsFragment = document.createDocumentFragment()
const authorsOption = document.createElement('option')
authorsOption.value = 'any'
authorsOption.innerText = 'All Authors'
authorsFragment.appendChild(authorsOption)

// this for loop is used to generate a drop down menu of options to choose authors from.
for (const author in authors) {
    const authorsOption = document.createElement('option')
    authorsOption.value = authors[author]
    authorsOption.innerText = authors[author]
    authorsFragment.appendChild(authorsOption)
}

document.querySelector('[data-search-authors]').appendChild(authorsFragment)

//created a search button that will open the search options
const searchButton = document.querySelector('[data-header-search]')
const searchMenu = document.querySelector('[data-search-overlay]')
const searchCancel = document.querySelector('[data-search-cancel]')

const showSearchMenu = (event) => {
    event.preventDefault()
    searchMenu.showModal()

    searchCancel.addEventListener('click', () => {
        searchMenu.close()
    })
}

searchButton.addEventListener('click', showSearchMenu)

//settings for theme toggle button

document.querySelector('[data-settings-theme]').value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'day' : 'night'
let v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'day' : 'night'

//CSS properties used in the DOM to set the theme colours
document.documentElement.style.setProperty('--color-dark', themeColor[v].dark);
document.documentElement.style.setProperty('--color-light', themeColor[v].light);

const showSettings = (event) => {
    event.preventDefault()
    settings.showModal()

    settingsCancel.addEventListener('click', () => {
        settings.close()
    })
}
const settingsButton = document.querySelector('[data-header-settings]')
const settingsCancel = document.querySelector('[data-settings-cancel]')
const settings = document.querySelector('[data-settings-overlay]')

settingsButton.addEventListener('click', showSettings)


const settingsSave = document.querySelector('[data-settings-overlay] [type="submit"]')
const settingsData = document.querySelector('[data-settings-form]')


//to ensure the theme is saved, an event fucntion is used and an EventListener.
const saveTheme = (event) => { 
    event.preventDefault()
    const formData = new FormData(settingsData)
    const result = Object.fromEntries(formData)

    document.documentElement.style.setProperty('--color-dark', themeColor[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', themeColor[result.theme].light);
    
    settings.close()
}

settingsSave.addEventListener('click', saveTheme)
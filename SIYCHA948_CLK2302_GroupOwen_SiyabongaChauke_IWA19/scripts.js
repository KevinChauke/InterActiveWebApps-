// // After declaring and iporting the objects from the "data.js" file, We now need to import the data.
// import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

// // This are the variables that will be used.
// let matches = books;
// let page = 1;
// const range = [0, BOOKS_PER_PAGE];

// // Comparison so it can show an Error message. 
// if (!books || !Array.isArray(books)) throw new Error('Source required') 
// if (!range || range.length < 2) throw new Error('Range must be an array with two numbers')

// // I created an object called themeColor for the day $ Night themes for improved readability.
// const themeColor = {
//     day : {
//         dark: '10, 10, 20',
//         light: '255, 255, 255'
//     },
//     night : {
//         dark: '255, 255, 255',
//         light: '10, 10, 20'
//     }

// }


// // declared a variable called fragment to hold the books
// const fragment = document.createDocumentFragment()
// let extracted = books.slice(0, BOOKS_PER_PAGE)      // this will show 36 book previews at a time.

// // I created a function called preview which will call the elements from the HTML file so that the user can be able to preview the books.
// // since the variables are = props, the we need to set the parameter to props
// const createPreview = (props) => {
//     const {author, id, image, title} = props

//      // This part sets the HTML content of the preview element using a template literal(interpolation)

//     const element = document.createElement("button");
//     element.classList.add("preview");
//     element.dataset.preview = id;
//     element.innerHTML = /* html */ `
//     <img 
//         class="preview__image" 
//         src="${image}" 
//     />
//     <div class="preview__info">
//         <h3 class="preview__title">${title}</h3>
//         <div class="preview__author">${authors[author]}</div>
//     </div>
//     `;
//     return element
// };

// //loop for the preview of books
// for (const books of extracted) {
//     const preview = createPreview(books)
//     fragment.appendChild(preview)
// }

// document.querySelector("[data-list-items]").appendChild(fragment);

// // Created a "showMoreB" button so that the user can load more books
// /*
//   in oder to use the button, we need a query selector to load the button from the html file, 
//   we also need a function called updateRemaining so that when the button is clicked, the code will load 36 more books.
  
// */

// const ShowMoreB = document.querySelector('[data-list-button]')

// // this is the arrow function called 'updateRemaining' 
// const updateRemaining = () => {
//     const remaining = books.length - (BOOKS_PER_PAGE * page)
//     return remaining;
// }

// const showMore = (event) => {
//     event.preventDefault()
//     page += 1
//     const remaining = updateRemaining()
//     // ? used to return undefined instead of throwing an error
//     const hasRemaining = remaining > 0 ? remaining : 0

//     // This part will extract more books from the array based on the number of books per page and the current page number.
//     const rangeStart = (page - 1) * BOOKS_PER_PAGE
//     const rangeEnd = books.length - remaining
//     extracted = books.slice(rangeStart, rangeEnd)

//     if (hasRemaining > 0) {
//         for (const books of extracted) {
//             const preview = createPreview(books)
//             fragment.appendChild(preview)    //If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position.
//         }
        
//         document.querySelector("[data-list-items]").appendChild(fragment);

//         // this is the preview button called from the html file using a querySelector
//         const previewList = document.querySelectorAll('.preview')
//         const previewArray = Array.from(previewList)
//         for (const preview of previewArray) {
//             // Event listeners are used to handle user interactions with the Book Connect app.
//             preview.addEventListener('click', activePreview)
//         }
//     }
// };

// // An event listener that will load more books when the showmore button is clicked 
// ShowMoreB.addEventListener("click", showMore) 

// // calling the "updateRemaining" to load more books using template literal(interpolation)
// ShowMoreB.innerHTML = /* html */ `
//     <span>Show more</span>
//     <span class="list__remaining">
//         (${updateRemaining()})
//     </span>
// `;

// /*
//     This is the summary of each book which will be shown when a user clicks on the book.
//     we use queryselector to load the summary of the book from the html file
// */
// const summary = document.querySelector('[data-list-active]')
// const summaryClose = document.querySelector('[data-list-close]')
// const summaryBackground = document.querySelector('[data-list-blur]')
// const summaryImage = document.querySelector('[data-list-image]')
// const summaryTitle = document.querySelector('[data-list-title]')
// const summarySubtitle = document.querySelector('[data-list-subtitle]')
// const summaryDescription = document.querySelector('[data-list-description]')

// const activePreview = (event) => {
//     event.preventDefault()
//     let active

//     const bookPreview = event.target.closest('.preview')
//     const bookPreviewId = bookPreview.getAttribute('data-preview');
    
//     for (const book of books) {
//         if (active) break

//         if (book.id === bookPreviewId) {
//             active = book
//         }
//     }

//     if (!active) return

//     const { title, image, description, published, author } = active
//     summary.showModal()
//     summaryBackground.src = image
//     summaryImage.src = image
//     summaryTitle.innerText = title
//     summarySubtitle.innerText = `${authors[author]} (${new Date(published).getFullYear()})`
//     summaryDescription.innerText = description
    
//     summaryClose.addEventListener('click', () => {
//         summary.close()
//     })
// }

// const previewList = document.querySelectorAll('.preview')
// const previewArray = Array.from(previewList)
// for (const preview of previewArray) {
//     preview.addEventListener('click', activePreview)
// }

// //created a search button that will open the search options
// const searchButton = document.querySelector('[data-header-search]')
// const searchMenu = document.querySelector('[data-search-overlay]')
// const searchCancel = document.querySelector('[data-search-cancel]')

// const showSearchMenu = (event) => {
//     event.preventDefault()
//     searchMenu.showModal()

//     searchCancel.addEventListener('click', () => {
//         searchMenu.close()
//     })
// }

// searchButton.addEventListener('click', showSearchMenu)

// // the inside of the search menu
// //elements in the search form that displays genre
// //For the search button, the overlay needed to display genre and author options, to achieve this, multiple elements needed to be appended to the DOM,
// const genresFragment = document.createDocumentFragment()
// const genresOption = document.createElement('option')
// genresOption.value = 'any'
// genresOption.innerText = 'All Genres'
// genresFragment.appendChild(genresOption)

// // this for loop is used to generate a drop down menu of options to choose genres from
// for (const genre in genres) {
//     const genresOption = document.createElement('option')
//     genresOption.value = genres[genre]
//     genresOption.innerText = genres[genre]
//     genresFragment.appendChild(genresOption)
// }

// document.querySelector('[data-search-genres]').appendChild(genresFragment)

// //elements in the search form that displays authors.
// const authorsFragment = document.createDocumentFragment()
// const authorsOption = document.createElement('option')
// authorsOption.value = 'any'
// authorsOption.innerText = 'All Authors'
// authorsFragment.appendChild(authorsOption)

// // this for loop is used to generate a drop down menu of options to choose authors from.
// for (const author in authors) {
//     const authorsOption = document.createElement('option')
//     authorsOption.value = authors[author]
//     authorsOption.innerText = authors[author]
//     authorsFragment.appendChild(authorsOption)
// }

// document.querySelector('[data-search-authors]').appendChild(authorsFragment)




// //settings for theme toggle button which refers to a DOM element that has a 'data-settings-theme' attribute.

// document.querySelector('[data-settings-theme]').value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'day' : 'night'
// let v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'day' : 'night'

// //CSS properties used in the DOM to set the theme colours
// document.documentElement.style.setProperty('--color-dark', themeColor[v].dark);
// document.documentElement.style.setProperty('--color-light', themeColor[v].light);

// // to show and close the settings menu, an arrow function called event is used and an EventListener.
// const showSettings = (event) => {
//     event.preventDefault()
//     settings.showModal()

//     settingsCancel.addEventListener('click', () => {
//         settings.close()
//     })
// }

import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'

let page = 1;
let matches = books

const starting = document.createDocumentFragment()

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `

    starting.appendChild(element)
}

document.querySelector('[data-list-items]').appendChild(starting)

const genreHtml = document.createDocumentFragment()
const firstGenreElement = document.createElement('option')
firstGenreElement.value = 'any'
firstGenreElement.innerText = 'All Genres'
genreHtml.appendChild(firstGenreElement)

for (const [id, name] of Object.entries(genres)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    genreHtml.appendChild(element)
}

document.querySelector('[data-search-genres]').appendChild(genreHtml)

const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}

document.querySelector('[data-search-authors]').appendChild(authorsHtml)

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('[data-settings-theme]').value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    document.querySelector('[data-settings-theme]').value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0

document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = false
})

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = false
})

document.querySelector('[data-header-search]').addEventListener('click', () => {
    document.querySelector('[data-search-overlay]').open = true 
    document.querySelector('[data-search-title]').focus()
})

document.querySelector('[data-header-settings]').addEventListener('click', () => {
    document.querySelector('[data-settings-overlay]').open = true 
})

document.querySelector('[data-list-close]').addEventListener('click', () => {
    document.querySelector('[data-list-active]').open = false
})

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme } = Object.fromEntries(formData)

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    document.querySelector('[data-settings-overlay]').open = false
})

document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        }
    }

    page = 1;
    matches = result

    if (result.length < 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show')
    } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show')
    }

    document.querySelector('[data-list-items]').innerHTML = ''
    const newItems = document.createDocumentFragment()

    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        newItems.appendChild(element)
    }

    document.querySelector('[data-list-items]').appendChild(newItems)
    document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

    document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `

    window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('[data-search-overlay]').open = false
})

document.querySelector('[data-list-button]').addEventListener('click', () => {
    const fragment = document.createDocumentFragment()

    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
        const element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)
    
        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `

        fragment.appendChild(element)
    }

    document.querySelector('[data-list-items]').appendChild(fragment)
    page += 1
})

document.querySelector('[data-list-items]').addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break

        if (node?.dataset?.preview) {
            let result = null
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            } 
        
            active = result
        }
    }
    
    if (active) {
        document.querySelector('[data-list-active]').open = true
        document.querySelector('[data-list-blur]').src = active.image
        document.querySelector('[data-list-image]').src = active.image
        document.querySelector('[data-list-title]').innerText = active.title
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        document.querySelector('[data-list-description]').innerText = active.description
    }
})
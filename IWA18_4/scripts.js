import {html, updateDraggingHtml, moveToColumn, createOrderHtml} from "./view.js";
import { TABLES, COLUMNS, state, createOrderData, updateDragging } from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

let draggedItem
let id 

const handleDragStart = (event) => {
    draggedItem = event.target.closest(".order"); 
    state.dragging.source = state.dragging.over;
    id = draggedItem.dataset.id; 
}

const handleDragEnd = (event) => {
    event.preventDefault();
    const moveTo = state.dragging.over; //
    moveToColumn(id, moveTo);
    updateDraggingHtml({over: null})
}

const handleHelpToggle = (event) => {
    html.help.overlay.showModal()

    html.help.cancel.addEventListener("click", () => {
        html.help.overlay.close()
    })
}

const handleAddToggle = (event) => {
    html.add.overlay.showModal()

    html.add.cancel.addEventListener("click", () => {
        html.add.overlay.close()
    })
}

const handleAddSubmit = (event) => {
    event.preventDefault();
    const props = {
        title: html.add.title.value,
        table: html.add.table.value,
        column : 'ordered'
    }
    const data = createOrderData(props)
    const content = createOrderHtml(data)
    const orderedColumn = document.querySelector('[data-area="ordered"]');
    const orderedDiv = orderedColumn.querySelector('[data-column="ordered"]');

    orderedDiv.appendChild(content)
    html.add.overlay.close()
}

let order
const handleEditToggle = (event) => {
    html.edit.overlay.showModal()
    order = event.target.closest('.order')


    html.edit.cancel.addEventListener("click", () => {
        html.edit.overlay.close()
    })
}

const handleEditSubmit = (event) => {
    event.preventDefault();
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value,
    }
    const props = createOrderData(data)
    const content = createOrderHtml(props)
    const editColumn = document.querySelector(`[data-area="${data.column}"]`);
    const orderedDiv = editColumn.querySelector(`[data-column="${data.column}"]`);

    orderedDiv.appendChild(content)
    html.edit.overlay.close()
}

const handleDelete = (event) => {
    order.remove()
    html.edit.overlay.close()
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}




const TODO_ITEMS = 'todo-items'

const setToDoItems = (items) => {
    localStorage.setItem(TODO_ITEMS, JSON.stringify(items))

}
const getToDoItems = () => {
    const itemsFromLocalStorage =localStorage.getItem(TODO_ITEMS)
    return itemsFromLocalStorage ?  JSON.parse(itemsFromLocalStorage) : []
}

export default {
    setToDoItems,
    getToDoItems,
}
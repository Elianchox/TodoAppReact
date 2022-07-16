
function onSearch(event, setSearchValue) {
    console.log(event.target.value);
    setSearchValue(event.target.value)
}

export { onSearch };
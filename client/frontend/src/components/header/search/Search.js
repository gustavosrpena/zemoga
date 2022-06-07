export const Search = (props) => {
    return(
    <>
        <form action="javascript:void(0)">
            <input className="nav__search-input" aria-label="search" type="text"/>
            <button className="nav__search icon-button" alt="Search" type="submit">
                {/* <img src="assets/img/search.svg" alt="search"/> */}
            </button>
        </form>
    </>
    )
}
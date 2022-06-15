import "./ListSelector.css"

export const ListSelector = (props) =>{
    const changeListView = (event) =>{
        props.setListType(event);
    }
    
    return (
        <div className="votecards__listselector-container">
            <div className="votecards__listselector-text">
                <h2 className="votecards__listselector-title">Previous Rulings</h2>
            </div>
            <div className="votecards__listselector-selector">
                <label className="votecards__listselector-label" >
                    <select className="votecards__listselector-input" onChange={(e) => changeListView(e.target.value)}>
                        <option value="list">List</option>
                        <option value="grid">Grid</option>
                    </select>
                </label>
            </div>
        </div>
    )
}
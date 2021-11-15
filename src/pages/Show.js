import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const Show = (props) => {
    // grab the navigate function
    const navigate = useNavigate()
    // get the params object
    const params = useParams();
    // grab the id from params
    const id = params.id;
    // grab bookmarks from props
    const bookmarks = props.bookmarks;
    // create state for form
    const [editForm, setEditForm] = useState({})
    // useEffect to set state to the existing bookmark, when the data is available
    useEffect(() => {
        if (props.bookmarks) {
            const mark = bookmarks.find((b) => b._id === id);
            setEditForm(mark)
        }
    }, [props.bookmarks])

    if (props.bookmarks) {
        // grab the target mark from the bookmarks array
        const mark = bookmarks.find((b) => b._id === id);

        // handleChange function for form
        const handleChange = (event) => {
            // create a copy of the state
            const newState = { ...editForm }
            // update the new state
            newState[event.target.name] = event.target.value
            // update the set
            setEditForm(newState)
        }
        // handleSubmit for form
        const handleSubmit = (event) => {
            // prevent refresh
            event.preventDefault()
            // pass the form data to updateBookmarks
            props.updateBookmarks(editForm, mark._id)
            // redirect bookmarks back to index
            navigate("/")

        }
        // delete bookmark
        const removeMark = () => {
            props.deleteBookmarks(mark._id)
            navigate("/")
        }
        const form = (
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                className="input"
                />
                <input
                type="text"
                value={editForm.url}
                name="url"
                placeholder="URL"
                onChange={handleChange}
                className="input"
                />
                 <input type="submit" value="Update Bookmark" className="input"/>
            </form>
            );

            return (
                <div className="mark showMark">
                <div>
                  <h1 className="showTitle">{mark.name}</h1>
                  <br/>
                  <h2>{mark.url}</h2>
                  {form}
                  <button className="button is-primary" onClick={removeMark}>DELETE</button>
                  </div>
            </div>
        );
    } else {
        return <h1>No Bookmark</h1>;
    }
};

export default Show;
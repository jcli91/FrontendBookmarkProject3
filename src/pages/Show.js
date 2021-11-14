import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"

const Show = (props) => {
    // grab the navigate function
    const navigate = useNavigate()
    // get the params object
    const params = useParams();
    // grab the id from params
    const id = params.id;
    // grab people from props
    const bookmarks = props.bookmarks;
    // create state for form
    const [editForm, setEditForm] = useState({})
    // useEffect to set state to the existing person, when the data is available
    useEffect(() => {
        if (props.bookmarks) {
            const bookmarks = bookmarks.find((b) => b._id === id);
            setEditForm(bookmarks)
        }
    }, [props.bookmarks])

    if (props.bookmarks) {
        // grab the target person from the people array
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
            // pass the form data to updatePeople
            props.updateBookmarks(editForm, mark._id)
            // redirect people back to index
            navigate("/")

        }
        // delete person
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
                />
                <input
                type="text"
                value={editForm.url}
                name="url"
                placeholder="URL"
                onChange={handleChange}
                />
                 <input type="submit" value="Update Bookmark"/>
            </form>
            );

            return (
                <div className="mark">
                  <h1>{mark.name}</h1>
                  <h2>{mark.url}</h2>
                  {form}
                  <button onClick={removeMark}>DELETE</button>
            </div>
        );
    } else {
        return <h1>No Bookmark</h1>;
    }
};

export default Show;
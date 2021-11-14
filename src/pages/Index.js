import { useState } from 'react'
import { Link } from 'react-router-dom'

const Index = (props) => {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        url: ""
    })

    // handleChange function to sync input with state
    const handleChange = (event) => {
        // make a copy of the state
        const newState = { ...newForm }
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setNewForm(newState)
    }

    // handleSubmit function for when form is submitted
    const handleSubmit = (event) => {
        //prevent the page from refreshing
        event.preventDefault()
        //pass the form data to createPeople function
        props.createBookmarks(newForm)
        // reset the form
        setNewForm({
            name: "",
            url: ""
        })

    }

    const form = (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="Name"
                onChange={handleChange} 
                className="input"
            />
            <input
                type="text"
                value={newForm.url}
                name="url"
                placeholder="URL"
                onChange={handleChange}
                className="input"
            />

            <input type="submit" value="Bookmark Website" className="input submit"/>
        </form>
    );

    if (props.bookmarks) {
        return (
            <section className="main">
                {form}
                {props.bookmarks.map((mark) => {
                    return (
                        <a href={mark.url}> 
                        <div key={mark._id} className="mark box">
                                <div className="linkBox"> 
                                    {mark.name} 
                                </div>
                          
                            <Link to={`/bookmarks/${mark._id}`}>
                                <button  className="input edit">Edit</button>
                            </Link>
                            
                        </div>
                          </a>
                    );
                })}
            </section>
        );
    } else {
        return (
            <section>
                {form}
                <h1>Loading...</h1>
            </section>
        );
    }
};

export default Index
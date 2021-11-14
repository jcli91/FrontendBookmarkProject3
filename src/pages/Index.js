import {useState} from 'react'
import {Link} from 'react-router-dom'

const Index = (props) => {

    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        url: "" 
    })

    // handleChange function to sync input with state
    const handleChange = (event) => {
        // make a copy of the state
        const newState = {...newForm}
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
        />
        <input
        type="text"
        value={newForm.url}
        name="url"
        placeholder="URL"
        onChange={handleChange}
        />
       
         <input type="submit" value="Bookmark Website"/>
    </form>
    );

    if (props.bookmarks) {
        return (
          <section>
            {form}
            {props.bookmarks.map((mark) => {
              return (
                <div key={mark._id} className="mark">
                  <Link to={`/bookmarks/${mark._id}`}>
                    <h1>{mark.name}</h1>
                  </Link>
                  <h3>{mark.url}</h3>
                </div>
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
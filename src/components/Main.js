import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'

const Main = (props) => {

    // state to hold our list of bookmarks
    const [bookmarks, setBookmarks] = useState(null);

    // your deployed heroku url
    const URL = "https://rb-sp-jl-bookmark.herokuapp.com/bookmarks/"

    // function to get updated list of bookmarks
    const getBookmarks = async () => {
        // make the api call
        const response = await fetch(URL)
        // turn the response into an object
        const data = await response.json()
        // set the state to the api data
        setBookmarks(data)
    }

    // function that will later be passed data from our new/create form and make the post
    // request to make a new bookmark

    const createBookmarks = async (mark) => {
        // make the post request to our API
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        })
        // get the updated list of bookmark
        getBookmarks()
    }

    // function to update a bookmark
    const updateBookmarks = async (mark, id) => {
        // make the put request
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        })
        // update the list of bookmark
        getBookmarks()
    }
    // function to delete a bookmark
    const deleteBookmarks = async (id) => {
        // make the delete request
        await fetch(URL + id, {
            method: "delete"
        })
        // update the list of bookmarks
        getBookmarks()

    }
    // a useEffect to make a call to getBookmarks when page loads
    useEffect(() => {
        getBookmarks()
    }, [])

    return (
        <main>
          <Routes>
            <Route path="/" element={
            <Index bookmarks={bookmarks} createBookmarks={createBookmarks}/>
            } />
            <Route path="/bookmarks/:id" element={
            <Show bookmarks={bookmarks} updateBookmarks={updateBookmarks} deleteBookmarks={deleteBookmarks}/>} 
            />
          </Routes>
        </main>
      );
    }
export default Main
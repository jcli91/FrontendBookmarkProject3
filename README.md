# Group Project (Bookmark'd) - Rob Bock, Jeff Li, Seb Patin
#### Frontend Readme By Rob Bock

- myMark is an application that will allow user to bookmark their favorite websites!

## User Stories

- Users can create a new bookmark and it will be posted unto the main page (Index).
- Users can update the details of the bookmark (URL/NAME).
- Users can delete a bookmark while keeping the original list of bookmarks intact.
- Users can click on a bookmark and it will take you to the corresponding website.
- Users can click the myMark icon and it will take you to the home page.

## List of Components

- Header
- Main

## Sketch of Intended Component Tree
```
-> App
  -> Header
  -> Main |state: bookmarks|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: bookmarks, createBookmarks|
      -> Route |path="/bookmarks/:id|
        -> Show |Props: bookmarks, updateBookmarks, deleteBookmarks|
```
## Frontend React Router Route Table

    <main>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/bookmarks/:id" element={<Show/>}/>
      </Routes>
    </main>

# Back-End

## Dependencies

Our backend dependencies include the following: dotenv, mongoose, express, cors, morgan

## Models

Below is the model for the bookmark schema:

bookmarkSchema = {
    title: String,
    url: String
}

## Backend Route Table

Our routes are listed in the table below:

| url | method | action |
|-----|--------|--------|
| /bookmark | get | display all bookmarks (index)|
| /bookmark/new | get | display form to make a new bookmark (new)|
| /bookmark/ | post | add a new bookmark to database (create)|
| /bookmark/:id | get | show info about a particular bookmark (show)|
| /bookmark/:id/edit | get | show edit form for a particular bookmark (edit)|
| /bookmark/:id | put | update a bookmark's data then redirect somewhere (update)|
| /bookmark/:id | delete | delete a bookmark's data then redirect somewhere (destroy)|

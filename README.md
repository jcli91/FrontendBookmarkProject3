# Group Project (Bookmark'd) - Rob Bock, Jeff Li, Seb Patin
#### Frontend Readme By Rob Bock

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
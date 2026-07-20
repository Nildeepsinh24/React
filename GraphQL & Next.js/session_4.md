# Session 4 – Mutations (Add, Update, Delete)

**Q1. Write a GraphQL mutation called addSong that takes title and artist as input and adds a new song to your playlist app. Use the useMutation hook from Apollo Client to call this mutation when a user submits a form.**

**Answer 1:**
```jsx
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      id
      title
      artist
    }
  }
`;

function AddSongForm() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [addSong] = useMutation(ADD_SONG);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addSong({ variables: { title, artist } });
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Song Title" required />
      <input value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" required />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;
```

**Q2. Implement an updateSong mutation and use the useMutation hook to allow users to edit the title of an existing song in your playlist app. After updating, ensure the UI shows the new title immediately.**

**Answer 2:**
```jsx
import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const UPDATE_SONG = gql`
  mutation UpdateSong($id: ID!, $title: String!) {
    updateSong(id: $id, title: $title) {
      id
      title
    }
  }
`;

function EditSongTitle({ song }) {
  const [newTitle, setNewTitle] = useState(song.title);
  // Apollo automatically updates the cache and UI if the returning object includes the 'id' and fields modified.
  const [updateSong] = useMutation(UPDATE_SONG);

  const handleUpdate = () => {
    updateSong({ variables: { id: song.id, title: newTitle } });
  };

  return (
    <div>
      <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <button onClick={handleUpdate}>Save Title</button>
    </div>
  );
}

export default EditSongTitle;
```

**Q3. Add a deleteSong mutation and connect it with a Delete button in your playlist app. When the button is clicked, remove the song from both the backend and the UI.**

**Answer 3:**
```jsx
import React from 'react';
import { useMutation, gql } from '@apollo/client';

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

function DeleteSongButton({ songId, GET_SONGS_QUERY }) {
  const [deleteSong, { loading }] = useMutation(DELETE_SONG, {
    // Update cache to remove deleted song from the UI
    update(cache, { data: { deleteSong } }) {
      cache.modify({
        fields: {
          songs(existingSongs = [], { readField }) {
            return existingSongs.filter(
              (songRef) => readField('id', songRef) !== deleteSong.id
            );
          }
        }
      });
    }
  });

  return (
    <button disabled={loading} onClick={() => deleteSong({ variables: { id: songId } })}>
      {loading ? 'Deleting...' : 'Delete Song'}
    </button>
  );
}

export default DeleteSongButton;
```

**Q4. Enable optimistic UI updates for the addSong mutation so that when a user adds a new song, it appears instantly in the playlist before the server responds.**

**Answer 4:**
```jsx
import React from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      id
      title
      artist
    }
  }
`;

function AddSongWithOptimisticUI() {
  const [addSong] = useMutation(ADD_SONG, {
    update(cache, { data: { addSong } }) {
      cache.modify({
        fields: {
          songs(existingSongs = []) {
            const newSongRef = cache.writeFragment({
              data: addSong,
              fragment: gql`
                fragment NewSong on Song {
                  id
                  title
                  artist
                }
              `
            });
            return [...existingSongs, newSongRef];
          }
        }
      });
    }
  });

  const handleAdd = (title, artist) => {
    addSong({
      variables: { title, artist },
      // The optimistic response that displays immediately
      optimisticResponse: {
        addSong: {
          __typename: "Song",
          id: `temp-id-${Date.now()}`, // Temporary ID
          title: title,
          artist: artist
        }
      }
    });
  };

  return <button onClick={() => handleAdd("Shape of You", "Ed Sheeran")}>Quick Add Song</button>;
}
```

**Q5. Show how a mutation modifies the backend and automatically re-renders the component by displaying the total number of songs in your playlist app. Update this count instantly whenever a song is added or deleted.**

**Answer 5:**
```jsx
import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_SONGS = gql`
  query GetSongs {
    songs {
      id
      title
      artist
    }
  }
`;

const ADD_SONG = gql`
  mutation AddSong($title: String!, $artist: String!) {
    addSong(title: $title, artist: $artist) {
      id
      title
      artist
    }
  }
`;

function PlaylistTracker() {
  const { data } = useQuery(GET_SONGS);
  const [addSong] = useMutation(ADD_SONG, {
    // Update local cache so React re-renders instantly
    update(cache, { data: { addSong } }) {
      const { songs } = cache.readQuery({ query: GET_SONGS });
      cache.writeQuery({
        query: GET_SONGS,
        data: { songs: [...songs, addSong] },
      });
    }
  });

  const totalSongs = data?.songs ? data.songs.length : 0;

  return (
    <div>
      <h2>Total Songs in Playlist: {totalSongs}</h2>
      
      {/* Component re-renders automatically updating totalSongs once addSong executes and modifies the cache */}
      <button onClick={() => addSong({ variables: { title: "New Song", artist: "Unknown" } })}>
        Add Random Song
      </button>
      
      <ul>
        {data && data.songs.map((song) => (
          <li key={song.id}>{song.title} by {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistTracker;
```

import ArtistSongBar from "./ArtistSongBar";

const ArtistTopSongs = ({ artistName, artistSongIds, artistSongs, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistData }) => {

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white"> Songs by {artistName}</h1>
      <div className="mt-6 w-full flex flex-col">

        {

          artistSongIds && artistSongIds.map((artistSongId, i) => (
            <ArtistSongBar
              key={`${artistSongId}-${i}`}
              song={artistSongs[artistSongId]}
              artistSongId={artistSongId}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}

            />
          ))


        }

      </div>
    </div>
  );
};


export default ArtistTopSongs;

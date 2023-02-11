import SongBar from "./SongBar";

const RelatedSongs = ({ relatedData, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistData }) => {
  const shazamSongs = relatedData?.resources?.['shazam-songs'];
  const songIds = shazamSongs && Object.keys(shazamSongs);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="mt-6 w-full flex flex-col">

        {songIds && songIds.map((songId, i) => (
          <SongBar
            key={`${songId}-${i}`}
            song={shazamSongs[songId]}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}

      </div>
    </div>
  );
};


export default RelatedSongs;

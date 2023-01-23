import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetChartTracksQuery } from '../redux/services/shazam';
import { useGetShazamDetailsQuery } from '../redux/services/shazam';
import { useGetRelatedSongsQuery } from '../redux/services/shazam';

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid, id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);

    const { data, isFetching } = useGetChartTracksQuery(songid)
    const { data: shazamData, isFetching: isFetchingShazamData } = useGetShazamDetailsQuery(songid)
    const { data: relatedData, isFetching: isFetchingRelatedData, error} = useGetRelatedSongsQuery(songid)

   
    if (isFetchingShazamData && isFetchingRelatedData) return <Loader title="Searching song details" />;

    if (error) return <Error />;

    const lyricsKey = shazamData?.resources?.lyrics && Object.keys(shazamData.resources.lyrics)[0]; const lyrics = shazamData?.resources?.lyrics?.[lyricsKey]?.attributes?.text;

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };


    return (
        <div className="flex flex-col">
            <DetailsHeader
                tracks={data?.tracks}
                songId={songid}
                shazamData={shazamData}
            />


            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Lyrics:</h2>


                <div className="mt-5">
                    <p className="text-gray-400 text-base my-1">
                        {lyrics ? <>{lyrics.map((line, index) => <p key={index} className="text-gray-400 text-base my-1">{line}</p>)}</>
                            : shazamData?.resources?.lyrics ?
                                Object.keys(shazamData?.resources?.lyrics).map(lyricsKey => (
                                    <>
                                        {shazamData?.resources?.lyrics[lyricsKey].attributes.text.map((line, index) => <p key={index} className="text-gray-400 text-base my-1">{line}</p>)}
                                    </>
                                ))
                                : <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
                        }
                    </p>
                </div>
            </div>
            <RelatedSongs
            relatedData={relatedData}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            />
        </div>

    )
}

export default SongDetails;

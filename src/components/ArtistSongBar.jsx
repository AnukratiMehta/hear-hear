import React from 'react';
import { Link } from 'react-router-dom';
import { useGetSongDetailsQuery } from '../redux/services/shazam';


import PlayPause from './PlayPause';

const ArtistSongBar = ({ artistSongId, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => {
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(artistSongId);

  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#Ee4C7C] py-2 p-4 rounded-lg cursor-pointer mb-2`}>
      <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={songData?.data[0].attributes.artwork.url.replace('{w}', '125').replace('{h}', '125')}
          alt={songData?.data[0].attributes?.name}
        />

        <div className="flex-1 flex flex-col justify-center mx-3">

          <Link to={`/songs/${artistSongId}`}>
            <p className="text-xl font-bold text-white">
              {songData?.data[0].attributes?.name}
            </p>
          </Link>

          <p className="text-base text-gray-300 mt-1">
            {songData?.data[0].attributes?.albumName}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ArtistSongBar;
import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ songData, song, i, artistSong, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistData }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#Ee4C7C] ${activeSong?.attributes?.title === song?.attributes?.title ? 'bg-[#Ee4C7C]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song?.attributes?.images?.coverArt?.replace('{w}', '125').replace('{h}', '125') ||
          song?.attributes?.images?.artistAvatar?.replace('{w}', '125').replace('{h}', '125') ||
          song?.attributes?.share?.image?.replace('{w}', '125').replace('{h}', '125')}
        alt={song?.attributes.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">

        <Link to={`/songs/${song}`}>
          <p className="text-xl font-bold text-white">
            {song?.attributes?.title}
          </p>
        </Link>

        <p className="text-base text-gray-300 mt-1">
          {song?.attributes?.artist}
        </p>
      </div>
    </div>
  </div>
);

export default SongBar;
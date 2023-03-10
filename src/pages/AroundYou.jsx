import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Error, Loader, SongCard } from '../components';
import { useGetSongByQuery } from '../redux/services/shazam';

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState('true')
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongByQuery(country);


  useEffect(() => {
    axios
      .get("https://geo.ipify.org/api/v2/country?apiKey=at_LNGmVpVF2IQhVrGgtI7jTozwJQRrb")
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

  if (error && country !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>

      <div className="flex flex-wrap justify-center gap-8">
        {data?.countries?.cities?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default AroundYou;
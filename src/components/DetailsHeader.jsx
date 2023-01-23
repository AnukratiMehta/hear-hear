import { Link } from 'react-router-dom'

const DetailsHeader = ({ tracks, songId, shazamData, artistId, artistsData }) => {

  const songArtistId = shazamData?.resources?.artists
    ? Object.keys(shazamData.resources.artists)[0]
    : null;

  const genreId = shazamData?.resources?.['shazam-songs']?.[songId]?.attributes?.genres?.primary || null;


  return (
    <div className='relative w-full flex flex-col'>
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

      <div className="absolute inset-0 flex items-center">
        <img alt="song cover" src={artistId ? artistsData && artistsData.find(id => id == artistId)?.attributes?.artwork?.url : tracks && tracks.find(track => track.key === songId)?.images?.coverart} className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {tracks && tracks.find(track => track.key === songId)?.title || 'No title found'}
          </p>
          <p className="text-base text-gray-400 mt-2">    {tracks && tracks.find(track => track.key === songId)?.subtitle || 'No artist found'}
          </p>

          {songArtistId ? (
            <Link to={`/artists/${songArtistId}`}>
              <p className="text-base text-gray-400 mt-2">{shazamData?.subtitle}</p>
            </Link>
          ) : null}

          <p className="text-base text-gray-400 mt-2">{genreId ? genreId : 'No genre found'}</p>

        </div>
      </div>
      <div className="w-full sm:h-44 h-24"/>
    </div>)
};

export default DetailsHeader;

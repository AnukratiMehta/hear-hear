import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArtistHeader, Error, Loader, ArtistTopSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazam';

const ArtistDetails = () => {

  const { id: artistId } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: artistData, isFetching: isFetchingArtistData, artistError } = useGetArtistDetailsQuery(artistId)

  if (isFetchingArtistData) return <Loader title="Loading artist details" />;

  if (artistError) return <Error />;

  const artistAttributes = artistData?.resources?.artists?.[artistId]?.attributes;
  const artworkURL = artistAttributes?.artwork?.url.replace("{w}x{h}", "400x400");
  const artistName = artistAttributes?.name;

  const artistSongs = artistData?.resources?.songs;
  const artistSongIds = artistSongs && Object.keys(artistSongs);

  return (
    <div className="flex flex-col">
      <ArtistHeader
        artworkURL={artworkURL}
        artistName={artistName}
      />

      <ArtistTopSongs
        artistSongs={artistSongs}
        artistSongIds={artistSongIds}
        artistName={artistName}
      />

    </div>
  );
};
export default ArtistDetails;

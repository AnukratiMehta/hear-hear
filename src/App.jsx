import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Searchbar /> */}

        <div className="px-6 h-screen bg-gradient-to-br from-black to-[#5D001E] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route exact path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div
          id="music-player"
          className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#5D001E] backdrop-blur-lg rounded-t-3xl z-10"
        >
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;

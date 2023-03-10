import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetChartTracksQuery } from '../redux/services/shazam';
import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongByQuery } from "../redux/services/shazam";



const Discover = () => {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetChartTracksQuery();


    if (isFetching) return <Loader title="Loading songs..." />;

    if (error) return <Error />

    // const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

    const reversedTracks = data?.tracks?.slice().reverse();


    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 xl:px-[5%]">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
                {/* <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5">
              {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)} 
        </select> */}
            </div>
            <div className="flex flex-wrap justify-center xl:justify-evenly gap-8">
                {reversedTracks?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );

};

export default Discover;

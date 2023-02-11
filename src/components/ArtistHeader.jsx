import React from 'react'

const ArtistHeader = ({ artworkURL, artistName }) => {
    return (
        <div className='relative w-full flex flex-col'>
            <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

            <div className="absolute inset-0 flex items-center">
                <img alt="song cover" src={artworkURL} className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
                />

                <div className="ml-5">
                    <p className="font-bold sm:text-3xl text-xl text-white">
                        {artistName || 'No artist found'}
                    </p>

                </div>
            </div>
            <div className="w-full sm:h-44 h-24" />
        </div>)

}

export default ArtistHeader
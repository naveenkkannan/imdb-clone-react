// import React, { useEffect, useState } from "react";

// import genreids from "../Utility/genre";



// function WatchList({ watchlist, setWatchList , handleRemoveFromWatchlist}) {
//   const [search, setSearch] = useState("");
//   const [genreList , setGenreList] = useState(['All Genres'])
//   const [currGenre , setCurrGenre] = useState('All Genres')

//   let handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   let handleFilter = (genre ) => {
//     setCurrGenre(genre)
//   }

//   let sortIncreasing = () => {
//     let sortedIncreasing = watchlist.sort((movieA, movieB) => {
//       return movieA.vote_average - movieB.vote_average;
//     });

//     setWatchList([...sortedIncreasing]);
//   };

//   let sortDecreasing = () => {
//     let sortedDecreasing = watchlist.sort((movieA, movieB) => {
//       return movieB.vote_average - movieA.vote_average;
//     });

//     setWatchList([...sortedDecreasing]);
//   };

//   let sortPIncreasing = () => {
//     let sortedPIncreasing = watchlist.sort((movieA, movieB) => {
//       return movieA.popularity - movieB.popularity;
//     });

//     setWatchList([...sortedPIncreasing]);
//   };

//   let sortPDecreasing = () => {
//     let sortedPDecreasing = watchlist.sort((movieA, movieB) => {
//       return movieB.popularity - movieA.popularity;
//     });

//     setWatchList([...sortedPDecreasing]);
//   };





//   useEffect(() =>{
//     let temp = watchlist.map((movieObj)=>{
//       return genreids[movieObj.genre_ids[0]]
//     })
//     temp = new Set(temp)
//     setGenreList(['All Genres' ,  ...temp])
//     console.log(temp)
//   } ,[watchlist])


  
  
  
//   return (
//     <>
//       <div className="flex justify-center flex-wrap m-4 ">
//         {genreList.map((genre)=>{
//           return <div onClick={()=>handleFilter(genre)} className={ currGenre==genre?"bg-black flex justify-center items-center h-[2.5rem] w-[5rem] rounded-xl text-white  font mx-4" : 'bg-gray-400/50 flex justify-center items-center h-[2.5rem] w-[5rem] rounded-xl text-black  font mx-4 my-2'}>
//           {genre}
//         </div>
//        })}

      
//       </div>

//       <div className="flex justify-center my-4 ">
//         <input
//           onChange={handleSearch}
//           value={search}
//           type="text"
//           placeholder="search movies"
//           className="h-[3rem] w-[18rem] bg-gray-200 outline-none p-4 rounded-xl "
//         />
//       </div>
//       <div className="overflow-hidden rounded-lg border border-gray-200 m-8 ">
//         <table className="w-full text-gray-500 text-center ">
//           <thead className="border-b-2">
//             <tr>
//               <th>Name</th>
//               <th className="flex justify-center ">
//                 <div onClick={sortIncreasing} className="p-2">
//                   <i className="fa-solid fa-arrow-up"></i>
//                 </div>
//                 <div className="p-2">Ratings</div>
//                 <div onClick={sortDecreasing} className="p-2">
//                   <i className="fa-solid fa-arrow-down"></i>
//                 </div>
//               </th>

//               <th>
//                 <div className="flex justify-center ">
//                   <div onClick={sortPIncreasing} className="p-2 ">
//                     <i className="fa-solid fa-arrow-up  "></i>
//                   </div>
//                   <div className="p-2">Popularity</div>
//                   <div onClick={sortPDecreasing} className="  p-2">
//                     <i className="fa-solid fa-arrow-down"></i>
//                   </div>
//                 </div>
//               </th>
//               <th>Genre</th>
//             </tr>
//           </thead>

//           <tbody>
//             {watchlist.filter((movieObj)=>{
//               if(currGenre=='All Genres'){
//                 return true 
//               }else{
//                 return genreids[movieObj.genre_ids[0]] ==currGenre;
//               }
//             }).filter((movieObj) => {
//                 return movieObj.title
//                   .toLowerCase()
//                   .includes(search.toLocaleLowerCase());
//               })
//               .map((movieObj) => {
//                 return (
//                   <tr className="border-b-2">
//                     <td className="flex items-center px-6 py-4">
//                       <img
//                         className="h-[6rem] w-[10rem]"
//                         src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
//                       />
//                       <div className="px-10">{movieObj.title}</div>
//                     </td>

//                     <td>{movieObj.vote_average}</td>
//                     <td>{movieObj.popularity}</td>
//                     <td>{genreids[movieObj.genre_ids[0]]}</td>
//                     <td onClick={()=>handleRemoveFromWatchlist(movieObj)}className="text-red-800">Delete</td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default WatchList;

// //{genreids[movieObj.genre_ids[0]]}

// import React, { useEffect, useState } from "react";
// import genreids from "../Utility/genre";

// function WatchList({ watchlist, setWatchList, handleRemoveFromWatchlist }) {
//   const [search, setSearch] = useState("");
//   const [genreList, setGenreList] = useState(["All Genres"]);
//   const [currGenre, setCurrGenre] = useState("All Genres");

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleFilter = (genre) => {
//     setCurrGenre(genre);
//   };

//   const sortIncreasing = () => {
//     const sortedIncreasing = watchlist.sort((movieA, movieB) => {
//       return movieA.vote_average - movieB.vote_average;
//     });
//     setWatchList([...sortedIncreasing]);
//   };

//   const sortDecreasing = () => {
//     const sortedDecreasing = watchlist.sort((movieA, movieB) => {
//       return movieB.vote_average - movieA.vote_average;
//     });
//     setWatchList([...sortedDecreasing]);
//   };

//   const sortPIncreasing = () => {
//     const sortedPIncreasing = watchlist.sort((movieA, movieB) => {
//       return movieA.popularity - movieB.popularity;
//     });
//     setWatchList([...sortedPIncreasing]);
//   };

//   const sortPDecreasing = () => {
//     const sortedPDecreasing = watchlist.sort((movieA, movieB) => {
//       return movieB.popularity - movieA.popularity;
//     });
//     setWatchList([...sortedPDecreasing]);
//   };

//   useEffect(() => {
//     let temp = watchlist.map((movieObj) => {
//       return genreids[movieObj.genre_ids[0]];
//     });
//     temp = new Set(temp);
//     setGenreList(["All Genres", ...temp]);
//   }, [watchlist]);

//   return (
//     <>
//       <div className="flex justify-center flex-wrap m-4 ">
//         {genreList.map((genre) => {
//           return (
//             <div
//               onClick={() => handleFilter(genre)}
//               className={
//                 currGenre === genre
//                   ? "bg-black flex justify-center items-center h-[2.5rem] w-[5rem] rounded-xl text-white font mx-4"
//                   : "bg-gray-400/50 flex justify-center items-center h-[2.5rem] w-[5rem] rounded-xl text-black font mx-4 my-2"
//               }
//               key={genre}
//             >
//               {genre}
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-center my-4 ">
//         <input
//           onChange={handleSearch}
//           value={search}
//           type="text"
//           placeholder="Search movies"
//           className="h-[3rem] w-[18rem] bg-gray-200 outline-none p-4 rounded-xl "
//         />
//       </div>

//       <div className="overflow-hidden rounded-lg border border-gray-200 m-8 ">
//         <table className="w-full text-gray-500 text-center ">
//           <thead className="border-b-2">
//             <tr>
//               <th>Name</th>
//               <th className="hidden md:table-cell">
//                 <div className="flex justify-center ">
//                   <div onClick={sortIncreasing} className="p-2">
//                     <i className="fa-solid fa-arrow-up"></i>
//                   </div>
//                   <div className="p-2">Ratings</div>
//                   <div onClick={sortDecreasing} className="p-2">
//                     <i className="fa-solid fa-arrow-down"></i>
//                   </div>
//                 </div>
//               </th>
//               <th className="hidden md:table-cell">
//                 <div className="flex justify-center ">
//                   <div onClick={sortPIncreasing} className="p-2 ">
//                     <i className="fa-solid fa-arrow-up  "></i>
//                   </div>
//                   <div className="p-2">Popularity</div>
//                   <div onClick={sortPDecreasing} className="p-2">
//                     <i className="fa-solid fa-arrow-down"></i>
//                   </div>
//                 </div>
//               </th>
//               <th className="hidden md:table-cell">Genre</th>
//             </tr>
//           </thead>

//           <tbody>
//             {watchlist
//               .filter((movieObj) => {
//                 if (currGenre === "All Genres") {
//                   return true;
//                 } else {
//                   return genreids[movieObj.genre_ids[0]] === currGenre;
//                 }
//               })
//               .filter((movieObj) => {
//                 return movieObj.title
//                   .toLowerCase()
//                   .includes(search.toLowerCase());
//               })
//               .map((movieObj) => {
//                 return (
//                   <tr className="border-b-2" key={movieObj.id}>
//                     <td className="flex items-center px-6 py-4">
//                       <img
//                         className="h-[6rem] w-[10rem] object-cover"
//                         src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
//                         alt={movieObj.title}
//                       />
//                       {/* Name will be hidden on mobile */}
//                       <div className="hidden md:block px-10">{movieObj.title}</div>
//                     </td>
//                     {/* Ratings will be hidden on mobile */}
//                     <td className="hidden md:table-cell">{movieObj.vote_average}</td>
//                     {/* Popularity will be hidden on mobile */}
//                     <td className="hidden md:table-cell">{movieObj.popularity}</td>
//                     {/* Genre will be hidden on mobile */}
//                     <td className="hidden md:table-cell">{genreids[movieObj.genre_ids[0]]}</td>
//                     <td onClick={() => handleRemoveFromWatchlist(movieObj)} className="text-red-800">
//                       Delete
//                     </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default WatchList;

import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function WatchList({ watchlist, setWatchList, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortIncreasing = () => {
    const sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  const sortDecreasing = () => {
    const sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  const sortPIncreasing = () => {
    const sortedPIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    setWatchList([...sortedPIncreasing]);
  };

  const sortPDecreasing = () => {
    const sortedPDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    setWatchList([...sortedPDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre === genre
                  ? "bg-black flex justify-center items-center h-[2.5rem] w-[5rem] rounded-xl text-white font mx-4"
                  : "bg-gray-400/50 flex justify-center items-center h-[2.5rem] w-[5rem] rounded-xl text-black font mx-4 my-2"
              }
              key={genre}
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4 ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none p-4 rounded-xl "
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8 ">
        <table className="w-full text-gray-500 text-center ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="hidden md:table-cell">
                <div className="flex justify-center ">
                  <div onClick={sortIncreasing} className="p-2">
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Ratings</div>
                  <div onClick={sortDecreasing} className="p-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th className="hidden md:table-cell">
                <div className="flex justify-center ">
                  <div onClick={sortPIncreasing} className="p-2 ">
                    <i className="fa-solid fa-arrow-up  "></i>
                  </div>
                  <div className="p-2">Popularity</div>
                  <div onClick={sortPDecreasing} className="p-2">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th className="hidden md:table-cell">Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] === currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2" key={movieObj.id}>
                    <td className="flex items-center px-4 py-2">
                      <img
                        className="h-[6rem] w-[10rem] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt={movieObj.title}
                      />
                      <div className="hidden md:block px-4">{movieObj.title}</div>
                    </td>
                    <td className="hidden md:table-cell">{movieObj.vote_average}</td>
                    <td className="hidden md:table-cell">{movieObj.popularity}</td>
                    <td className="hidden md:table-cell">{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red-800 cursor-pointer px-2 py-2"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;


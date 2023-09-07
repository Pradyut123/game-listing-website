import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenre from "../components/GamesByGenre";

const Home = () => {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState('Action');

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      // console.log(resp.data.results);
      setAllGameList(resp.data.results);
      // setGameListByGenre(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    console.log("Genreid", id);
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log(resp.data.results);
      setGameListByGenre(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-8">
      <div className="hidden md:block">
        <GenreList
          selectedGenreId={(selectedGenreId) =>
            getGameListByGenreId(selectedGenreId)
          }
          selectedGenreName={(name)=>setSelectedGenreName(name)}
        />
      </div>
      <div className="md:col-span-3 col-span-4 px-3">
        {allGameList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenre gameListGenre={gameListByGenre}  selectedGenreName={selectedGenreName}/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

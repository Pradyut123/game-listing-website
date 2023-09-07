import React, { useEffect } from "react";

const GamesByGenre = ({ gameListGenre, selectedGenreName }) => {
  useEffect(() => {
    // console.log("GameList", gameListGenre);
  }, []);

  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        Popular {selectedGenreName} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameListGenre.map((item) => (
          <div className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all duration-300 cursor-pointer">
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[18px] dark:text-white font-bold text-center mt-1">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500  dark:text-gray-300 text-center">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesByGenre;

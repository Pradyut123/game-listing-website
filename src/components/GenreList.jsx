import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

const GenreList = () => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const getgenreList = () => {
    GlobalApi.getgenreList.then((resp) => {
      console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  useEffect(() => {
    getgenreList();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">
        Genre
        {genreList.map((item, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${
              activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
            }`}
          >
            <img
              src={item.image_background}
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                activeIndex == index ? "scale-110" : null
              }`}
            />
            <div>
              <h2
                className={`text-[18px] dark:text-white group-hover:font-bold transition-all duration-300 ${
                  activeIndex == index ? "font-bold" : null
                }`}
              >
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </h2>
    </div>
  );
};

export default GenreList;

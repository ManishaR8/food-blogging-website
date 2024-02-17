import React, { useState } from 'react';
import CardLayer from './CardLayer';
import grilledTomatoes from '../assets/grilledTomatoes.jpeg';
import broccliSoup from '../assets/broccliSoup.jpeg';
import crunchWrap from '../assets/crunchWrap.jpeg';
import postworkout from '../assets/postworkout.jpeg';
import grillCorn from '../assets/grillCorn.jpeg';
import snacksForTravel from '../assets/snacksForTravel.jpeg';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const LatestArticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(6 / 3); 

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
  };


  const allCards = [
    { imgSrc: grilledTomatoes, head: 'Grilled Tomatoes at Home' },
    { imgSrc: broccliSoup, head: 'Broccoli Soup Recipe' },
    { imgSrc: crunchWrap, head: 'Crunch Wrap Recipe' },
    { imgSrc: postworkout, head: 'Post Workout Nutrition Ideas' },
    { imgSrc: grillCorn, head: 'Grilled Corn Recipe' },
    { imgSrc: snacksForTravel, head: 'Healthy Snacks for Travel' },
  ];


  const startIndex = (currentPage - 1) * 3;
  const endIndex = Math.min(startIndex + 3, allCards.length);

 
  const currentCards = allCards.slice(startIndex, endIndex);

  return (
    <div className="flex justify-center flex-col items-center h-full">
      <div className="lg:h-[1915px] xl:h-[679px] h-[1915px] sm:h-[1915px] md:h-[1915px] xl:w-[1225px] md:w-fit sm:w-fit w-fit lg:w-fit  text-[#0E2368] xl:flex flex-col justify-between 
      lg:grid sm:grid md:grid gap-x-4 grid">

        <h1 className="text-5xl items-end flex xl:justify-start lg:justify-start md:justify-center sm:justify-center justify-center font-semibold p-6 font-sourceSans">
          Latest Articles
        </h1>

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row justify-between p-4 gap-x-9">
          {currentCards.map((card, index) => (
            <CardLayer key={index} imgSrc={card.imgSrc} head={card.head} />
          ))}
        </div>
      </div>
      <div className="flex p-14 w-60 justify-between items-center">
        <button
          className="border border-[#AFAFAF] rounded-lg"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack size={37} />
        </button>
        <p className=' text-xl'>{currentPage}/{totalPages}</p>
        <button
          className="border border-[#AFAFAF] rounded"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward size={37} />
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;

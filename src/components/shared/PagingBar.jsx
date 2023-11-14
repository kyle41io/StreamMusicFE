"use client";

import styles from "@/styles/shared/PagingBar.module.css";

function PagingBar({ currentPage = 1, onClick, maxPage }) {
  const handleClick = (item) => {
    onClick(item);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < maxPage) {
      onClick(currentPage + 1);
    }
  };

  const rerenderArray = (currentPage) => {
    //console.log(currentPage);
    if (currentPage === 1) {
      return [currentPage + 1, currentPage + 2];
    } else if (currentPage === 2) {
      return [currentPage, currentPage + 1];
    } else if (currentPage === 1 + 3) {
      return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1];
    } else if (currentPage === maxPage - 3) {
      return [currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    } else if (currentPage === maxPage - 1) {
      return [currentPage - 1, currentPage];
    } else if (currentPage === maxPage) {
      return [currentPage - 2, currentPage - 1];
    } else if (currentPage >= 1 + 2 && currentPage <= maxPage - 2) {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  return (
    <div className={styles["main-bar"]}>
      <button onClick={handlePrevious}>Previous</button>
      <div className={styles["page-number-choser"]}>
        <div
          className={`${styles.numbers} ${
            currentPage == 1 ? styles.chosen : ""
          }`}
          onClick={() => onClick(1)}
        >
          1
        </div>
        {currentPage > 1 + 3 && (
          <div className="w-5 h-5 justify-center flex">...</div>
        )}
        {rerenderArray(currentPage).map((item, index) => (
          <div
            className={`${currentPage == item ? styles["chosen"] : ""} ${
              styles.numbers
            }`}
            onClick={() => handleClick(item)}
            key={index}
          >
            {item}
          </div>
        ))}
        {currentPage < maxPage - 3 && (
          <div className="w-5 h-5 justify-center flex">...</div>
        )}
        <div
          className={`${styles.numbers} ${
            currentPage == maxPage ? styles.chosen : ""
          }`}
          onClick={() => onClick(maxPage)}
        >
          {maxPage}
        </div>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PagingBar;

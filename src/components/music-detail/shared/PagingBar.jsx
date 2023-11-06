'use client'

import styles from './../../styles/shared/PagingBar.module.css'

function PagingBar({ currentPage, onClick, maxPage }) {

    const handleClick = (item) => {
        onClick(item);
    }

    const rerenderArray = (currentPage) => {
        console.log(currentPage);
        if (currentPage === 1) {
            return [currentPage + 1, currentPage + 2];
        } else if (currentPage === 2) {
            return [currentPage, currentPage + 1]
        } else if (currentPage === 1 + 3) {
            return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1]
        } else if (currentPage === maxPage -3) {
            return [currentPage -1, currentPage, currentPage + 1, currentPage + 2]
        } else if (currentPage === maxPage - 1) {
            return [currentPage -1, currentPage]
        } else if (currentPage === maxPage) {
            return [currentPage - 2, currentPage - 1]
        }
        else if (currentPage >= 1 + 2 && currentPage <= maxPage - 2) {
            return [currentPage - 1, currentPage, currentPage + 1];
        }
    }

    return (
        <div className={styles['main-bar']}>
            <span className="cursor-default" onClick={() => onClick(currentPage - 1)}>
                Previous
            </span>
            <div className={styles['page-number-choser']}>
                <div className={`${styles.numbers} ${currentPage == 1 ? styles.chosen : ''}`} onClick={() => onClick(1)}>
                    1
                </div>
                {currentPage > 1 + 3 && <div className="w-5 h-5 justify-center flex">
                    ...
                </div>}
                {rerenderArray(currentPage).map((item, index) =>
                    <div className={`${currentPage == item ? styles['chosen'] : ""} ${styles.numbers}`} onClick={() => handleClick(item)} key={index}>
                        {item}
                    </div>)}
                {currentPage < maxPage - 3 && <div className="w-5 h-5 justify-center flex">
                    ...
                </div>}
                <div className={`${styles.numbers} ${currentPage == maxPage ? styles.chosen : ''}`} onClick={() => onClick(maxPage)}>
                    {maxPage}
                </div>
            </div>
            <span className="cursor-default" onClick={() => onClick(currentPage + 1)}>
                Next
            </span>
        </div>
    )
}


export default PagingBar
import React from 'react'

interface PaginationProps {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: (page: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <>
            <div className='flex justify-center items-center py-4'>
                {
                    pages?.map((page, index)=> (
                        <button
                        onClick={() => setCurrentPage(page)}
                        key={index} className={`${currentPage == page ? 'text-red-500' : 'text-black'} px-4 py-2 border-1 border-gray-500 text-black font-bold rounded-md cursor-pointer mx-2`}>
                            {page}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default Pagination;

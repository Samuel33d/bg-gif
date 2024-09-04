'use client';

import React from 'react';
import SvgIcon from '../../../components/utils/SvgIcons';

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-end space-x-2 bg-white py-2 px-4">
      <button
        className="p-2 -rotate-90 rounded-md text-gray-400 hover:bg-gray-100 transition-all"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <SvgIcon name="arrow" width={15} />
      </button>
      <span className="text-sm text-gray-600">{currentPage}</span>
      <span className="text-sm text-gray-400">/</span>
      <span className="text-sm text-gray-600">{totalPages}</span>
      <button
        className="p-2 rotate-90 rounded-md text-gray-400 hover:bg-gray-100 transition-all"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <SvgIcon name="arrow" width={15} />
      </button>
    </div>
  );
};

export default Pagination;

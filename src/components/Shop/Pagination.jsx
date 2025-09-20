import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="mr-6 text-base font-normal text-primary-navy">
        1 / 2
      </div>
      <Link 
        to="/shop?page=2"
        className="flex items-center justify-center rounded-md bg-accent px-3 py-2 text-sm font-medium text-accent-foreground shadow-[0_2px_8px_rgba(255,138,101,0.3)] transition-opacity duration-200 hover:opacity-90"
      >
        <span>Next</span>
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default Pagination;
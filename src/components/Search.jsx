import React from 'react';

const Search = ({ searchTerm, setSearchTerm}) => {

  return (
    <form  className="max-w-md mx-auto mt-5 mb-5">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <img src="search.svg" alt=""/>
        </div>
        <input
          type="search"
          id="default-search"
          className=" search block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search from thousands of movies.."
          required
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
import { useState } from "react";
import { useNavigate } from "react-router";

export function SearchBar() {
  return (
    <form role="search">
      <label htmlFor="recipe-search" className="sr-only">
        Search Recipes
      </label>
      <input
        id="recipe-search"
        type="search"
        placeholder="Search recipes...."
        className="rounded-md border border-[#ca77eb] px-3 py-2"
      />
      <button type="submit" className="rounded-md">
        Search
      </button>
    </form>
  );
}

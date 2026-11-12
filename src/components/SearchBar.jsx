import { useState } from "react";
import { useNavigate } from "react-router";

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    // console.log(searchTerm);

    function handleSubmit(e){
        e.preventDefault();

        if(!searchTerm.trim()){
            return
        }

        navigate(`/search?query=${searchTerm.trim()}`)

        setSearchTerm("")


    }

  return (
    <form role="search" onSubmit={handleSubmit} className="flex w-full sm:w-auto gap-2">
      <label htmlFor="recipe-search" className="sr-only">
        Search Recipes
      </label>
      <input
        id="recipe-search"
        type="search"
        value={searchTerm}
        placeholder="Search recipes...."
        onChange={e => setSearchTerm(e.target.value)}
        className="flex-1 min-w-0 rounded-md border border-[#ca77eb] px-3 py-2"
      />
      <button type="submit" className="rounded-md bg-[#f3e8fa] text-[#431853] border border-[#ca77eb] px-3 hover:bg-[#ca77eb]">
        Search
      </button>
    </form>
  );
}

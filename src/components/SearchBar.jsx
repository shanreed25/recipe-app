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
    <form role="search" onSubmit={handleSubmit}>
      <label htmlFor="recipe-search" className="sr-only">
        Search Recipes
      </label>
      <input
        id="recipe-search"
        type="search"
        value={searchTerm}
        placeholder="Search recipes...."
        onChange={e => setSearchTerm(e.target.value)}
        className="rounded-md border border-[#ca77eb] px-3 py-2"
      />
      <button type="submit" className="rounded-md ml-10 bg-[#f3e8fa] text-[#431853] border border-[#ca77eb] px-3 hover:bg-[#ca77eb]">
        Search
      </button>
    </form>
  );
}

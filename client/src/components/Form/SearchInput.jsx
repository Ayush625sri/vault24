import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/search";
import { InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form role="search" onSubmit={handleSubmit} className="flex items-center mx-4">
      <div className="relative flex-grow">
        <InputBase
          placeholder="Search…"
          className="bg-white rounded-full pl-10 pr-4 py-1 w-full text-black"
          inputProps={{ "aria-label": "search" }}
          value={values?.keyword || ""}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </form>
  );
};

export default SearchInput;

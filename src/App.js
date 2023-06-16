import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";
import { useFetchData } from "./hooks/useFetchData.js";
import { filterEmployees, filteredByGender } from "./utils/handleSearchUtils";

const url = "https://dummyjson.com/users?limit=8";

const App = () => {
  const [data, loading, error] = useFetchData(url);
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  if (loading) {
    return "loading...";
  }

  if (error) {
    return error + " ...";
  }

  const filteredAllEmployees = filterEmployees(data?.users, searchTerm);
  const filteredBySelectedGender = genderFilter
    ? filteredByGender(filteredAllEmployees, genderFilter)
    : filteredAllEmployees;

  return (
    <div>
      <div style={{ marginTop: "1%", padding: "10%" }}>
        <SearchBar
          setSearchTerm={setSearchTerm}
          setGenderFilter={setGenderFilter}
        />
        <EmployeeList employees={filteredBySelectedGender} />
      </div>
    </div>
  );
};

export default App;

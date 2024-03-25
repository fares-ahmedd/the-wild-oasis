import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <Select
        options={options}
        type="white"
        onChange={handleChange}
        value={sortBy}
      />
    </div>
  );
}

export default SortBy;

//import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { TextField, Typography } from "@mui/material";
export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(changeFilter(name));
  };
  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Find contacts by name/number
      </Typography>
      <TextField
        fullWidth
        value={filter}
        onChange={handleFilter}
        placeholder="Search..."
        variant="outlined"
        // sx={{ backgroundColor: "#f2f4f8" }}
      />
    </div>
  );
}

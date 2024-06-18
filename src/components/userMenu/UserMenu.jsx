
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Avatar, Button, Typography, Box } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


return (
  <Box display="flex" alignItems="center"> 
    <Typography variant="body1" gutterBottom>
      Welcome, {user.name}
    </Typography>
    <Avatar alt={user.name} src={user.avatar} sx={{ ml: 1 }} /> 
    <Button variant="contained" onClick={() => dispatch(logOut())} sx={{ ml: 1 }}> 
      Logout
    </Button>
  </Box>
);
};


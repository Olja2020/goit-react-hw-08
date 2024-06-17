// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import css from "./Navigation.module.css";

// export const Navigation = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <nav>
//       <NavLink className={css.link} to="/">
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink className={css.link} to="/contacts">
//           Phonebook
//         </NavLink>
//       )}
//     </nav>
//   );
// };
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link, Typography, Grid } from "@mui/material"; // Import Link and Typography

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
//     <nav>
//       <Typography variant="h6" component="div">
      
//         <Link component={NavLink} to="/">
//           Home
//         </Link>
//       </Typography>
//       {isLoggedIn && (
//         <Typography variant="h6" component="div">
          
//           <Link component={NavLink} to="/contacts">
//             Phonebook
//           </Link>
//         </Typography>
//       )}
//     </nav>
//   );
// };
<nav>
<Grid container spacing={2} justifyContent="center"> 
  <Grid item>
    <Typography variant="h6" component="div">
    <Link component={NavLink} to="/" style={{ textDecoration: 'none' }}>
        Home
      </Link>
    </Typography>
  </Grid>
  {isLoggedIn && (
    <Grid item>
      <Typography variant="h6" component="div">
        <Link component={NavLink} to="/contacts" style={{ textDecoration: 'none' }}>
          Phonebook
        </Link>
      </Typography>
    </Grid>
  )}
</Grid>
</nav>
);
}
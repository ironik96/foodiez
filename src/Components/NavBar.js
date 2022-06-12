import { Button } from "react-bootstrap";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import SigninButton from "./Buttons/SigninButton";
import SignupButton from "./Buttons/SignupButton";
import FilterButton from "./Buttons/FilterButton";
import recipesStore from "../stores/recipesStore";

const NavBar = () => {
  const onClickSignout = () => {
    recipesStore.resetFilters();
    authStore.signout();
  };
  let authButtons;
  if (authStore.user)
    authButtons = (
      <>
        <FilterButton />
        <Button variant="dark" onClick={onClickSignout}>
          Sign out
        </Button>
      </>
    );
  else
    authButtons = (
      <>
        <FilterButton />
        <SigninButton />
        <SignupButton />
      </>
    );

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1 style={{ color: "black" }}>Foodiez</h1>
        <div></div>
        {authButtons}
      </nav>
    </div>
  );
};

export default observer(NavBar);

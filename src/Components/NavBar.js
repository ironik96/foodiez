import { Button } from "react-bootstrap";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import SigninButton from "./Buttons/SigninButton";
import SignupButton from "./Buttons/SignupButton";

const NavBar = () => {
  let authButtons;
  if (authStore.user)
    authButtons = (
      <Button variant="dark" onClick={() => authStore.signout()}>
        Sign out
      </Button>
    );
  else
    authButtons = (
      <>
        <SigninButton />
        <SignupButton />
      </>
    );

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1>Foodiez</h1>
        <div></div>
        {authButtons}
      </nav>
    </div>
  );
};

export default observer(NavBar);

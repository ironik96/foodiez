import SigninButton from "./Buttons/SigninButton";
import SignupButton from "./Buttons/SignupButton";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1>Foodiez</h1>
        <ul className="navbar-pages">
          <li>Recipies</li>
          <li>Ingredients</li>
        </ul>
        <div></div>
        <SigninButton />
        <SignupButton />
      </nav>
    </div>
  );
};

export default NavBar;

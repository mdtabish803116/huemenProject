import "./Home.scss";

import RecipeList from "../Components/RecipeList";
import RecipeDetails from "../Components/RecipeDetails";

const Home = () => {
  return (
    <>
    <p style = {{textAlign:"center" , fontSize:"24px", 
    fontWeight:"550",fontFamily:"sans-serif",
    backgroundColor:"teal", color:"white", 
    padding:"10px", 
    borderRadius:"8px"}}>Welcome to our Restaurant</p>
    <hr></hr>
    <div className="recipe-container">
      <RecipeList />
      <RecipeDetails />
    </div>
    </>
    
  );
};

export default Home

import { Link } from "react-router-dom";
import "./RecipeDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/actionCreators";

const RecipeDetails = () => {
  const { selectedRecipe, wishlist } = useSelector((store) => store);

  console.log(wishlist);
  const dispatch = useDispatch();

  const ingredients = [];

  if (selectedRecipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}`];
      const measure = selectedRecipe[`strMeasure${i}`];

      if (!ingredient) break;

      ingredients.push(`${measure} - ${ingredient}`);
    }
  }

  const handleAddClick = (selectedRecipe) => {
     if (isExistInWishlist(selectedRecipe)){
         alert("item already added")
     }else {
        dispatch(addToWishlist(selectedRecipe))
        alert("item added successfully")
     }
  }

  const isExistInWishlist = (recipe) => {
    let result = wishlist.findIndex((item) => item.idMeal === recipe.idMeal);

    return result === -1 ? false : true;
  };

  return selectedRecipe ? (
    <div className="recipe-select-container">
      <div className="wishlist-wrapper">
        <Link to="/wishlist">
          Go to WishList
        </Link>
      </div>
      <div className="recipe-container">
        <div>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
        </div>
        <div className="recipe-details">
          <button onClick={() => handleAddClick(selectedRecipe)
          }>
            Add to wishList
          </button>

          <h1>
            <span>{selectedRecipe.strMeal}</span> - {selectedRecipe.strArea}
          </h1>
          {
            <p>
              {selectedRecipe.strCategory}{" "}
              {selectedRecipe.strTags && `- ${selectedRecipe.strTags}`}
            </p>
          }
          <h3>Steps:</h3>
          <p>{selectedRecipe.strInstructions}</p>

          <h3>Ingredients</h3>
          <div className="recipe-ingredient">
            {ingredients.map((ingredient) => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="details-message">
      <h1> Please select Recipe to get details.</h1>
    </div>
  );
};

export default RecipeDetails;

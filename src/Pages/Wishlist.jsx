import { FaDeezer, FaDeleteLeft, FaTrash, FaTrashCan } from "react-icons/fa6";
import "./Wishlist.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/actionCreators";

const Wishlist = () => {
  const dispatch = useDispatch();

  const { wishlist } = useSelector((store) => store);

  return (
    <div className="wishlist-wrapper">
      <div>
        <h1 className="wishlist-heading">Wishlisted items</h1>
      </div>
      <div className="wishlist-items">
        {wishlist &&
          wishlist?.map((item) => (
            <div key={item.idMeal} className="wishlist-item">
              <div>
                <img src={item.strMealThumb} alt={item.strMeal} />
              </div>
              <button onClick={() => dispatch(addToWishlist(item))}>
                <FaTrash size={20} color="gray" />
              </button>

              <h1>
               {item.strMeal}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wishlist;

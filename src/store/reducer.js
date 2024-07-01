export const initialStateCart = {
  cartValue: [],
  favValue: [],
};

export function cartReducer(state = initialStateCart, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state.cartValue];
      for (let i = 0; i < action.payload.quantity; i++) {
        updatedCart.push({
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
          price: action.payload.price,
          quantity: 1,
        });
      }
      return { ...state, cartValue: updatedCart };

    case "REMOVE_FROM_CART": {
      const existingCartItemIndex = state.cartValue.findIndex(
        (item) => item.id === action.payload
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartValue = state.cartValue
          .map((item, index) =>
            index === existingCartItemIndex
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

        return { ...state, cartValue: updatedCartValue };
      } else {
        return state;
      }
    }
    case "ADD_TO_FAV": {
      const existingFavItemIndex = state.favValue.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingFavItemIndex !== -1) {
        const updatedFavValue = state.favValue.map((item, index) =>
          index === existingFavItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, favValue: updatedFavValue };
      } else {
        return {
          ...state,
          favValue: [...state.favValue, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "DELETE_FROM_CART": {
      return {
        ...state,
        cartValue: state.cartValue.filter(
          (prods) => prods.id !== action.payload
        ),
      };
    }

    case "REMOVE_FROM_FAV": {
      return {
        ...state,
        favValue: state.favValue.filter((prods) => prods.id !== action.payload),
      };
    }
    case "RETURN_TO_DEFAULT": {
      return initialStateCart;
    }

    default:
      return state;
  }
}

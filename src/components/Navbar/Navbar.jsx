import { useState, useContext } from "react";
import { CartContext } from "../../store/context";
import {
  Logo,
  DropdownContainerFav,
  LinkNavStyle,
  DropdownItem,
  NavbarContainer,
  LinkContainerDesktop,
  LogoContainer,
  LinkNavFav,
  LinkNavCart,
  Icon,
  CartTotal,
  CartButton,
  CartIcon,
  RemoveButton,
  CartLink,
  QuantityButton,
  CartSpanText,
  CartSpanNr,
  CartSpanPrice,
  SmallScreenCartButton,
  FavButton,
  DropdownLink,
} from "./Navbar.style";
import SearchBar from "./SearchBar";
import {
  removeFromCart,
  removeFromFav,
  addToCart,
  deleteFromCart,
} from "../../store/actions";

function NavBar() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const { dispatchCart } = useContext(CartContext);
  const { stateGlobalCart } = useContext(CartContext);
  const favValue = stateGlobalCart?.favValue || [];
  const cartValue = stateGlobalCart?.cartValue || [];

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(",", ".").replace(" LEI", ""));
  };
  const total = cartValue
    .reduce((acc, item) => acc + parsePrice(item.price) * item.quantity, 0)
    .toFixed(2);
  const totalItems = cartValue.reduce((acc, item) => acc + item.quantity, 0);
  const totalFav = favValue.reduce((acc, item) => acc + item.quantity, 0);

  const handleDisplayDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const groupedFavValue = favValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const groupedCartValue = cartValue.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleAddCart = (id, name, img, price) => {
    dispatchCart(addToCart(id, name, img, price));
  };

  const handleRemoveFromFav = (id) => {
    dispatchCart(removeFromFav(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatchCart(removeFromCart(id));
  };

  const handleDeleteFromCart = (id) => {
    dispatchCart(deleteFromCart(id));
  };

  return (
    <NavbarContainer>
      <LogoContainer to="/home">
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIIHpz4dgcOywt6SNbvtXFpU5vcngmdKh_w&s"></Logo>
      </LogoContainer>
      <SearchBar></SearchBar>
      <LinkContainerDesktop>
        <LinkNavStyle
          onMouseEnter={() => favValue.length > 0 && setShowFavDropdown(true)}
          onMouseLeave={() => setShowFavDropdown(false)}
        >
          Favorite
          {favValue.length > 0 && <LinkNavFav>{favValue.length}</LinkNavFav>}
          {showFavDropdown && (
            <DropdownContainerFav>
              {groupedFavValue.map((item, index) => (
                <DropdownItem key={index}>
                  <DropdownLink to={`/produs/${item.id}`} key={index}>
                    <Icon src={item.img}></Icon>
                    <CartSpanText>{item.name}</CartSpanText>
                    <span style={{ marginLeft: "5px" }}>{item.price}</span>
                  </DropdownLink>
                  <RemoveButton onClick={() => handleRemoveFromFav(item.id)}>
                    x
                  </RemoveButton>
                </DropdownItem>
              ))}
              <CartTotal>
                <span>TOTAL: {totalFav} produse</span>
              </CartTotal>
              <CartLink to="/favorite">
                <FavButton> Favorite</FavButton>
              </CartLink>
            </DropdownContainerFav>
          )}
        </LinkNavStyle>
        <LinkNavStyle
          onMouseEnter={() => cartValue.length > 0 && setShowCartDropdown(true)}
          onMouseLeave={() => setShowCartDropdown(false)}
        >
          Cosul Meu
          {cartValue.length > 0 && (
            <LinkNavCart>{cartValue.length}</LinkNavCart>
          )}
          {showCartDropdown && (
            <DropdownContainerFav>
              {groupedCartValue.map((item, index) => (
                <DropdownItem key={index}>
                  <DropdownLink to={`/produs/${item.id}`} key={index}>
                    <Icon src={item.img}></Icon>
                    <CartSpanText>{item.name}</CartSpanText>
                  </DropdownLink>
                  <QuantityButton
                    onClick={() =>
                      handleRemoveFromCart(item.id, item.name, item.img)
                    }
                  >
                    -
                  </QuantityButton>
                  <CartSpanNr>{item.quantity}</CartSpanNr>
                  <QuantityButton
                    onClick={() =>
                      handleAddCart(item.id, item.name, item.img, item.price)
                    }
                  >
                    +
                  </QuantityButton>
                  <CartSpanPrice style={{ marginLeft: "5px" }}>
                    {item.price}
                  </CartSpanPrice>
                  <RemoveButton
                    onClick={() =>
                      handleDeleteFromCart(item.id, item.name, item.img)
                    }
                  >
                    x
                  </RemoveButton>
                </DropdownItem>
              ))}
              <CartTotal>
                <span>TOTAL: {totalItems} produse</span>
                <span>{total} LEI</span>
              </CartTotal>
              <CartLink to="/cart">
                <CartButton>
                  {" "}
                  <CartIcon>🛒 </CartIcon>Cumpara
                </CartButton>
              </CartLink>
            </DropdownContainerFav>
          )}
        </LinkNavStyle>
      </LinkContainerDesktop>

      <SmallScreenCartButton
        onClick={() => setShowFavDropdown(!showFavDropdown)}
      >
        <i className="far fa-heart"></i>
        {favValue.length > 0 && <LinkNavFav>{favValue.length}</LinkNavFav>}
        {showFavDropdown && (
          <DropdownContainerFav>
            {groupedFavValue.map((item, index) => (
              <DropdownItem key={index}>
                <DropdownLink to={`/produs/${item.id}`} key={index}>
                  <Icon src={item.img}></Icon>
                  <CartSpanText>{item.name}</CartSpanText>
                  <span style={{ marginLeft: "5px" }}>{item.price}</span>
                </DropdownLink>
                <RemoveButton onClick={() => handleRemoveFromFav(item.id)}>
                  x
                </RemoveButton>
              </DropdownItem>
            ))}
            <CartTotal>
              <span>TOTAL: {totalFav} produse</span>
            </CartTotal>
            <CartLink to="/favorite">
              <FavButton> Favorite</FavButton>
            </CartLink>
          </DropdownContainerFav>
        )}
      </SmallScreenCartButton>

      <SmallScreenCartButton
        onClick={() => setShowCartDropdown(!showCartDropdown)}
      >
        <i className="fas fa-shopping-cart"></i>
        {cartValue.length > 0 && <LinkNavCart>{cartValue.length}</LinkNavCart>}
        {showCartDropdown && (
          <DropdownContainerFav>
            {groupedCartValue.map((item, index) => (
              <DropdownItem key={index}>
                <DropdownLink to={`/produs/${item.id}`} key={index}>
                  <Icon src={item.img}></Icon>
                  <CartSpanText>{item.name}</CartSpanText>
                </DropdownLink>
                <QuantityButton
                  onClick={() =>
                    handleRemoveFromCart(item.id, item.name, item.img)
                  }
                >
                  -
                </QuantityButton>
                <CartSpanNr>{item.quantity}</CartSpanNr>
                <QuantityButton
                  onClick={() =>
                    handleAddCart(item.id, item.name, item.img, item.price)
                  }
                >
                  +
                </QuantityButton>
                <CartSpanPrice style={{ marginLeft: "5px" }}>
                  {item.price}
                </CartSpanPrice>
                <RemoveButton
                  onClick={() =>
                    handleDeleteFromCart(item.id, item.name, item.img)
                  }
                >
                  x
                </RemoveButton>
              </DropdownItem>
            ))}
            <CartTotal>
              <span>TOTAL: {totalItems} produse</span>
              <span>{total} LEI</span>
            </CartTotal>
            <CartLink to="/cart">
              <CartButton>
                <CartIcon>🛒 </CartIcon> Cumpara
              </CartButton>
            </CartLink>
          </DropdownContainerFav>
        )}
      </SmallScreenCartButton>
    </NavbarContainer>
  );
}

export default NavBar;

import * as M from "../../../styles/HomeStyle/HomeStyle";
import { useNavigate } from "react-router-dom";

const MenuComponent = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/dictionary");
  };
  return (
    <M.Menu onClick={handleGoToHome}>
      <M.House>
        <M.StyledHouseImg />
      </M.House>
      <M.HorizontalLine />
      <M.Chart>
        <M.StyledChartImg />
      </M.Chart>
      <M.HorizontalLine />
      <M.Coin>
        <M.StyledCoinImg />
      </M.Coin>
      <M.HorizontalLine />
      <M.Earth>
        <M.StyledEarthImg />
      </M.Earth>
      <M.HorizontalLine />
      <M.Wallet>
        <M.StyledWalletImg />
      </M.Wallet>
    </M.Menu>
  );
};

export default MenuComponent;

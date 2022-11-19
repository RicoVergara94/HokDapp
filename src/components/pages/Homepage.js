import OpenWalletButton from "../buttons/OpenWalletButton";
import CloseWalletButton from "../buttons/CloseWalletButton";
import AddAddressButton from "../buttons/AddAddressButton";
import CheckBalanceButton from "../buttons/CheckBalanceButton";
import UpdateRatesButton from "../buttons/UpdateRatesButton";

import "./styles.css";
export default function Homepage() {
  return (
    <div class="homepage-container">
      <h1>Homepage</h1>
      <div class="first-row-buttons">
        <OpenWalletButton />
        <CloseWalletButton />
      </div>
      <div class="second-row-buttons">
        <AddAddressButton />
        <CheckBalanceButton />
        <UpdateRatesButton />
      </div>
    </div>
  );
}

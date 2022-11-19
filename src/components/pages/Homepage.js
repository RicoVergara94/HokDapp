import AddAddressButton from "../buttons/AddAddressButton";
import CheckBalanceButton from "../buttons/CheckBalanceButton";
import UpdateRatesButton from "../buttons/UpdateRatesButton";

import "./styles.css";
export default function Homepage() {
  return (
    <div class="homepage-container">
      <h1>Homepage</h1>
      <AddAddressButton />
      <CheckBalanceButton />
      <UpdateRatesButton />
    </div>
  );
}

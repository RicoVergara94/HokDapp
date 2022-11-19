//import a css file in same directory as this file
import "./style.css";
import icon from "../../images/addAddressesButton.png";
export default function AddAddressButton() {
  return (
    <div>
      <div class="button">
        <img src={icon} alt="add button" />
      </div>
    </div>
  );
}

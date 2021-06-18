import "./style.css";

const Buttons = () => (
    <div className="form__buttonsContainer">
        <button className="buttons__button" type={"submit"}>
            Oblicz
        </button>
        <button className="buttons__button" type="reset">
            Wyczyść
        </button>
    </div>
);

export default Buttons;
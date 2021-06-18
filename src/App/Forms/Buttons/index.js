import "./style.css";

const Buttons = () => (
    <div className="form__buttonsContainer">
        <button className="buttons__button buttons__button--submit" type={"submit"}>
            Oblicz
        </button>
        <button className="buttons__button buttons__button--reset" type="reset">
            Wyczyść
        </button>
    </div>
);

export default Buttons;
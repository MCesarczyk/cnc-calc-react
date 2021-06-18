import "./style.css";

const Field = ({ control, binding, text, input }) => (
    <label className="field">
        <span className="fieldInnerText">
            {control}<label for={binding}>{text}:</label>
        </span>
        {input}
    </label>
);

export default Field;
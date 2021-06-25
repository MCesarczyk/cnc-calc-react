  
const Switcher = ({ languages, changeLanguage }) => (
    <div>
        {languages.map(language => (
            <button
                key={language.key}
                onClick={() => changeLanguage(language.key)}
            >
                {language.key}
            </button>
        ))}
    </div>
);

export default Switcher;
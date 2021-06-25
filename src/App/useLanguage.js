import { useState, useEffect } from "react";

export const useLanguage = () => {

    const [langId, setLangId] = useState(localStorage.getItem("langId") || 0);

    useEffect(() => {
        localStorage.setItem("langId", langId);
    }, [langId]);

    return { langId, setLangId };
}

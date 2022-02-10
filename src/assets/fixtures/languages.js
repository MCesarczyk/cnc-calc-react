const languages = [
  {
    key: "EN",
    mainTitle: "Cutting parameters calculator",
    welcomeTitle: "Choose an option, please.",
    section1Title: "Milling/drilling",
    section2Title: "Threading/tapping",
    form1Legend: "Surface cutting speed",
    form2Legend: "Tool rotational speed",
    form3Legend: "Linear feedrate",
    form4Legend: "Tapping feedrate",
    diameter: {
      name: "D",
      unit: " [mm]:",
      placeholder: "tool diameter"
    },
    rotSpeed: {
      name: "n",
      sub: "rev",
      unit: " [rev/min]:",
      placeholder: "tool rotations"
    },
    cutSpeed: {
      name: "V",
      sub: "c",
      unit: " [m/min]:",
      placeholder: "cutting speed"
    },
    feedrate: {
      name: "f",
      unit: " [mm/min]:",
      placeholder: "feedrate"
    },
    feedPerRev: {
      name: "f",
      sub: "r",
      unit: " [mm/rev]:",
      placeholder: "feed per rev."
    },
    feedPerTooth: {
      name: "f",
      sub: "t",
      unit: " [mm]:",
      placeholder: "feed per tooth"
    },
    teethNumber: {
      name: "t:",
      placeholder: "numer of teeth"
    },
    pitch: {
      name: "P",
      unit: " [mm]",
      placeholder: "thread pitch"
    },
    buttonLabel: {
      submit: "Calculate",
      reset: "Reset"
    }
  },
  {
    key: "PL",
    mainTitle: "Kalkulator obróbki skrawaniem",
    welcomeTitle: "Wybierz jedną z opcji.",
    section1Title: "Frezowanie/wiercenie",
    section2Title: "Gwintowanie",
    form1Legend: "Liniowa prędkość skrawania",
    form2Legend: "Prędkość obrotowa narzędzia",
    form3Legend: "Wielkość posuwu liniowego",
    form4Legend: "Wielkość posuwu przy gwintowaniu",
    diameter: {
      name: "D",
      unit: " [mm]:",
      placeholder: "średnica narzędzia"
    },
    rotSpeed: {
      name: "n",
      sub: "obr",
      unit: " [obr/min]:",
      placeholder: "obroty wrzeciona"
    },
    cutSpeed: {
      name: "V",
      sub: "c",
      unit: " [m/min]:",
      placeholder: "prędkość skrawania"
    },
    feedrate: {
      name: "f",
      unit: " [mm/min]:",
      placeholder: "posuw liniowy"
    },
    feedPerRev: {
      name: "f",
      sub: "o",
      unit: " [mm/obr]:",
      placeholder: "posuw na obrót"
    },
    feedPerTooth: {
      name: "f",
      sub: "z",
      unit: " [mm]:",
      placeholder: "posuw na ząb"
    },
    teethNumber: {
      name: "z:",
      placeholder: "liczba zębów"
    },
    pitch: {
      name: "P",
      unit: " [mm]",
      placeholder: "skok gwintu"
    },
    buttonLabel: {
      submit: "Oblicz",
      reset: "Wyczyść"
    }
  },
];

export default languages;
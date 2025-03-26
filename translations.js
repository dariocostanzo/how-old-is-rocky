// Translations for different languages
const translations = {
  en: {
    title: "Rocky's Age",
    years: "Years",
    months: "Months",
    weeks: "Weeks",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    birthDate: "Born on December 11, 2024",
    birthdayMessage: "Happy Birthday Rocky! 🎉"
  },
  it: {
    title: "Età di Rocky",
    years: "Anni",
    months: "Mesi",
    weeks: "Settimane",
    days: "Giorni",
    hours: "Ore",
    minutes: "Minuti",
    birthDate: "Nato l'11 Dicembre 2024",
    birthdayMessage: "Buon Compleanno Rocky! 🎉"
  },
  es: {
    title: "Edad de Rocky",
    years: "Años",
    months: "Meses",
    weeks: "Semanas",
    days: "Días",
    hours: "Horas",
    minutes: "Minutos",
    birthDate: "Nacido el 11 de Diciembre de 2024",
    birthdayMessage: "¡Feliz Cumpleaños Rocky! 🎉"
  },
  // Add more languages as needed
};

// Function to get user's language
function getUserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const lang = browserLang.split('-')[0]; // Get the primary language code
  
  // Check if we have translations for this language
  if (translations[lang]) {
    return lang;
  }
  
  // Default to English if the language is not supported
  return 'en';
}

// Function to update page text
function updatePageLanguage() {
  const lang = getUserLanguage();
  const texts = translations[lang];
  
  // Update all text elements
  document.querySelector('h1').textContent = texts.title;
  
  const ageBoxes = document.querySelectorAll('.age-box p');
  ageBoxes[0].textContent = texts.years;
  ageBoxes[1].textContent = texts.months;
  ageBoxes[2].textContent = texts.weeks;
  ageBoxes[3].textContent = texts.days;
  ageBoxes[4].textContent = texts.hours;
  ageBoxes[5].textContent = texts.minutes;
  
  document.querySelector('.birth-date').textContent = texts.birthDate;
  document.querySelector('#birthday-celebration h2').textContent = texts.birthdayMessage;
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', updatePageLanguage);
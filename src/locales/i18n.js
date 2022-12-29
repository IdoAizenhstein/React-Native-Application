import i18next from 'i18next'
import en from './en'
import he from './he'
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'he',
    debug: false,
    resources: {
      en,
      he,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  })

export default i18next

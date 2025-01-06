// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Ensure you import the styles

// Vuetify themes (optional)
const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#6200ea', // Replace with your color
    secondary: '#03dac6', // Replace with your color
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
});

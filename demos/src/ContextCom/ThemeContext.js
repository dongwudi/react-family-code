import React from 'react';
const ThemeContext = React.createContext({
	theme: "red",
	toggleTheme: () => {}
});

export default ThemeContext;
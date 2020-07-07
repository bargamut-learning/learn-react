'use strict';

(() => {
	const themes = {
		light: {
			foreground: "#000000",
			background: "#eeeeee"
		},
		dark: {
			foreground: "#ffffff",
			background: "#222222"
		},
	};

	const { useContext, useState } = React;

	const ThemesContext = React.createContext(`light`);
	
	function App() {
		const [ themeName, setThemeName ] = useState(`dark`);

		const toggleTheme = () => {
			setThemeName(themeName === `dark` ? `light` : `dark`);
		};

		return (
			<ThemesContext.Provider value={themes[themeName]}>
				<Toolbar changeTheme={toggleTheme} />
			</ThemesContext.Provider>
		);
	}

	function Toolbar({changeTheme}) {
		return (
			<div>
				<ThemeButton onClick={changeTheme} />
			</div>
		);
	}

	function ThemeButton(props) {
		const theme = useContext(ThemesContext);

		return (
			<button
				{...props}
				style={{ background: theme.background, color: theme.foreground }}
			>
				Я стилизован темой из контекста!
			</button>
		);
	}

	ReactDOM.render(
		<App />,
		document.getElementById(`hooks-use-context`)
	);
})();
import { useThemeContext } from "../contexts/theme-context";

const ToggleTheme = () => {
  const [, dispatch] = useThemeContext();
  console.log("render");
  return (
    <button onClick={() => dispatch({ type: "toggleTheme" })}>
      ToggleTheme
    </button>
  );
};

export default ToggleTheme;

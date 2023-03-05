import { useThemeContext } from "../contexts/theme-context";

export default function DisplayTheme() {
  const [state] = useThemeContext();
  return <div>{state.theme}</div>;
}

import { useEffect, useState } from "react";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Reducer from "./components/Reducer";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToggleTheme";
import { AppContext, AppProvider } from "./contexts/app-context";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <div>
      <AppProvider>
        <ThemeProvider>
          <Navbar />
          <hr />
          <Setting />
          <hr />
          <DisplayTheme />
          <hr />
          <ToggleTheme />
        </ThemeProvider>
        {/* <Reducer /> */}
      </AppProvider>
    </div>
  );
}

export default App;

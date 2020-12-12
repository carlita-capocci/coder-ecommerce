import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const theme1 = {
  color: {
    leaf: "red",
    branch: "green",
  },
};
const theme2 = {
  color: {
    leaf: "violet",
    branch: "cyan",
  },
};

function Leaf({ children }) {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: `1px solid ${theme.color.leaf}`, margin: 5 }}>
      I'm a Leaf
      <br /> {children}
    </div>
  );
}

function Branch({ children }) {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ border: `1px solid ${theme.color.branch}`, margin: 5 }}>
      I'm a Branch
      {children}
    </div>
  );
}

function Changer() {
  const theme = useContext(ThemeContext);
  return (
    <div >
      <button onClick={() => theme.modifyer(theme1)}>Theme1</button>
      <button onClick={() => theme.modifyer(theme2)}>Theme2</button>
    </div>
  );
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(theme1);
  theme.modifyer = setTheme;
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default function Root() {
  return (
    <div style={{ border: "1px solid black", margin: 40 }}>
      <ThemeProvider>
        <Branch>
          <Leaf>
            <h1>hola</h1>
          </Leaf>
          <Leaf></Leaf>
          <Leaf><Changer></Changer></Leaf>
        </Branch>
        <Branch>
          <Leaf></Leaf>
          <Leaf></Leaf>
          <Leaf></Leaf>
          <Leaf></Leaf>
          <Leaf><Changer></Changer></Leaf>
          <Branch>
            <Leaf></Leaf>
            <Leaf></Leaf>
            <Leaf></Leaf>
            <Leaf></Leaf>
            <Leaf><Changer></Changer></Leaf>
          </Branch>
        </Branch>
      </ThemeProvider>
    </div>
  );
}

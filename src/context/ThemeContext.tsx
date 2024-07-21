import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  theme: "day" | "night";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"day" | "night">(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as "day" | "night";
      return storedTheme ?? "day";
    }
    return "day";
  });

  const toggleTheme = () => {
    const newTheme = theme === "day" ? "night" : "day";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

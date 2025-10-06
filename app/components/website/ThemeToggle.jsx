// components/ThemeToggle.jsx
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // نتأكد أن الكود يشتغل بعد التحميل على المتصفح فقط
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // يمنع Hydration Mismatch

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-white text-black dark:bg-black dark:text-white px-3 py-1 rounded transition"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

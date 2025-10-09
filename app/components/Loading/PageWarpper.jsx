"use client";

import { useState, useEffect } from "react";
import PageLoading from "./PageLoading";

export default function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoading color="#f87171" bg="bg-gray-900" />;

  return <>{children}</>;
}

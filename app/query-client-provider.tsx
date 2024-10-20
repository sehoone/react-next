"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from 'jotai';
import React from "react";
import { DevTools } from "jotai-devtools";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        {/* jotai devtools */}
        <DevTools />
        {children}
      </JotaiProvider>
    </QueryClientProvider>
  );
}
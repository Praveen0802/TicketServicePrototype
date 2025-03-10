"use client"

import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/utils/redux/store";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body
          className={` antialiased`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}

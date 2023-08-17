import React from "react";
import Header from "./components/layouts/Header";
import { GlobalProvider } from "./GlobalProvider";
import '../globals.css';
import './page.module.css';


export default function RootLayout({ children }) {
  //return <div className>{children}</div>;
  return (
    <html lang="fr">
      <head />
      <body>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}

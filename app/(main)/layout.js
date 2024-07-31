"use client"

import '../globals.css'
import Header from "./_components/header";
import Footer from "./_components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
    <body>
         <Header/>
            <main  className=" text-foreground bg-background">{children}</main>
         <Footer/>
     </body>
    </html>
  )
}

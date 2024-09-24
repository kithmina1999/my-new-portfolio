import "./globals.css"
import { Lato } from 'next/font/google'
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import { PageTransition } from "@/components/PageTransition"
import StairTransition from "@/components/StairEffect"

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          lato.variable,
          "min-h-screen font-lato antialiased"
        )}

      ><StairTransition />
        <PageTransition>
          <Header />
        {children}
        </PageTransition>
        

        
      </body>
    </html>
  )
}

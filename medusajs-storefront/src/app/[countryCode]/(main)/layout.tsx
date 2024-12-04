import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { Navbar } from "components/ui/Navbar"
// import Navbar from "components/ui/Navbar"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {/* <Nav /> */}
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

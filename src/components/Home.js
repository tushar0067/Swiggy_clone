import { useRef } from "react";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
export default function Home(){
    
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
    return (
        <>
        <Header onScrollToFooter={scrollToFooter} ></Header>
        <Main></Main>
        <Footer ref={footerRef}></Footer>
        </>
    )
}
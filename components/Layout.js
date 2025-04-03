import Header from "./Header.js"
import Styles from "./Layout.module.css"

export default function Layout({children}){
    return(
        <>
        <Header/>
        <main>{children}</main>
        </>
    )
}
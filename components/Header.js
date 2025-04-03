import Navigation from "./Navigation"
import Styles from "./Header.module.css"
import Link from "next/link"

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.flex}>
                <Link href="/"><img className={Styles.logo} src="logo_campus_news.png" alt="Logo"></img></Link>
                <Link href="/"><h1 className={Styles.text} >Campus News</h1></Link>
            </div>
            <Navigation />
        </div>
    )
}
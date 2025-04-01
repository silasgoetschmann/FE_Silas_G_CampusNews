import Navigation from "./Navigation"
import Styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={Styles.header}>
            <div className={Styles.flex}>
                <img className={Styles.logo} src="logo_campus_news.png" alt="Logo"></img>
                <h1 className={Styles.text} >Campus News</h1>
            </div>
            <Navigation/>
        </div>
    )
}
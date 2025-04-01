import Link from "next/link"
import Styles from "./Navigation.module.css"


export default function () {
    return (
        <nav>

        <ul className={Styles.navList}>
                <li className={Styles.li}><Link href="" className={Styles.navLink}>Home</Link></li>
                <li className={Styles.li}><Link href="/profile" className={Styles.navLink}>Profil</Link></li>
            </ul>
        </nav>


    )
}
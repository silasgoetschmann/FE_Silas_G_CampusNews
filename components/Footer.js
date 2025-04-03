
import Link from "next/link"
import Styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <h3>Campus News 2025</h3>
            <Link href="/#">Datenschutz & Impressum</Link>
        </div>

    )
}
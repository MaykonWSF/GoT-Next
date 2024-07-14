import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav style={styles.navbar}>
        <Image style={styles.navImage} src="/logo-GOT-preta.png" alt="logo GOT" width={100} height={100} priority/>
        <ul style={styles.navList}>
            <li style={styles.navItem}>
            <Link href="/">Home</Link>
            </li>
            <li style={styles.navItem}>
            <Link href="/sobre">Sobre</Link>
            </li>
            <li style={styles.navItem}>
            <Link href="/personagens">Personagens</Link>
            </li>
            <li style={styles.navItem}>
            <Link href="/dragoes">Dragões</Link>
            </li>
        </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        padding: '5px',
        backgroundColor: '#333',
      },
      navList: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
      },
    navImage: {
        marginRight: '20px',
        filter: 'invert(100%)',
    },
    navItem: {
        marginRight: '20px',
        color: 'white',
    },
};
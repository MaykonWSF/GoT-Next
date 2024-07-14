import Link from 'next/link';

export default function Footer() {
    const devUsername = "MaykonWSF"
    const github = "https://github.com/MaykonWSF"

    return (
        <footer style={styles.footer}>
        <p style={styles.footerText}>Desenvolvido por <a href={github} target="_blank">@{devUsername}</a></p>
        </footer>
    )
}

const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        backgroundColor: '#333',
        color: 'white',
    },
    footerText: {
        fontSize: '0.7rem',
        margin: 0,
    }
};
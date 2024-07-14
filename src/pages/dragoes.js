import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Dragoes() {
    return (
        <div>
        <Navbar />
        <div style={styles.main}>
            <div style={styles.sections}>
            <h1>DRAGÕES</h1>
            </div>
        </div>
        <Footer />
        </div>
    );
}

const styles = {
    main: {
        backgroundImage: 'url("/bg02.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    sections: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
    }
}
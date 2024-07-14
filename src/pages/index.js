import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Image from 'next/image';

export default function Home() {
    return (
        <div>
        <Navbar />
        <div style={styles.main}>
            <div style={styles.sections}>
            <Image style ={{filter: 'invert(100%)', marginLeft: '40%'}} src="/logo-GOT-preta.png" alt="Logo" width={600} height={600} />
            </div>
            <div style={{margin: '0 3%', marginTop: '15%'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h2 style={{fontWeight: 'bold', color: 'white', fontSize: '3.5rem'}}>O mundo de Game of Thrones</h2>
                <div style={styles.sections}>
                <Image style={{borderRadius: '10px'}} src="/game-of-thrones.jpg" alt="Logo" width={600} height={600} />
                <p style={{padding: '0 3%', fontSize: '1.3rem'}}>
                Game of Thrones é uma épica série de fantasia que cativou milhões de fãs ao redor do mundo. Baseada na série de livros "A Song of Ice and Fire" (As Crônicas de Gelo e Fogo) escrita por George R.R. Martin, a história é ambientada em um mundo fictício dividido em vários continentes e reinos, repleto de intrigas políticas, batalhas épicas e criaturas míticas.
                </p>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

const styles = {
    main: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), url("/bg02.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    sections: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
    }
}
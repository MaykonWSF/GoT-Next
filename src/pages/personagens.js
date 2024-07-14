import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CardPersonagem from "../../components/cardsPersonagens";
import personagens from "../../data/personagensDB";

export default function Personagens() {
  return (
    <div>
    <Navbar />
    <div style={styles.container}>
      {personagens.map((personagem) => (
        <CardPersonagem key={personagem.id} personagem={personagem} />
      ))}
    </div>
    <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};
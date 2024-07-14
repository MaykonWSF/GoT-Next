import Image from 'next/image';

export default function CardPersonagem({ personagem }) {
  return (
    <div style={styles.card}>
      <div>
      <Image
        src={personagem.imagem}
        alt={personagem.nome}
        width={200}
        height={200}
        style={styles.image}
      />
      </div>
      <div style={styles.texto}>
      <h2 style={{fontWeight: 'bold'}}>{personagem.nome}</h2>
      <p>{personagem.descricao}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
    border: '1px solid #333',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    width: '18%',
  },
  image: {
    borderRadius: '10px',
    height: '100%',
  },
  texto: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '0.7rem',
  },
};

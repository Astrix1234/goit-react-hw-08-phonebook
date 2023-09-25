const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',

    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'white',
    marginTop: '300px',
  },
  emoji: {
    fontSize: '100px',
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        CONTACTS MANAGER WELCOME PAGE{' '}
        <span role="img" aria-label="Greeting icon" style={styles.emoji}>
          📚
        </span>
      </h1>
    </div>
  );
}

import { Helmet } from 'react-helmet';
import { Contacts } from 'components/Contacts/Contacts';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
  },
};

export default function ContactsPage() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <Contacts />
    </div>
  );
}

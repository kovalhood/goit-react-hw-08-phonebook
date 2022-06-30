import Section from "components/Section";
import Container from "components/Container";
import Card from "components/Card";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

export default function ContactsPage() {
  return (
    <>
      <Section>
        <Container>
          <Card title={'Phonebook'}>
            <ContactForm />
          </Card>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <Card title={'Contacts'}>
            <Filter />
            <ContactList />
          </Card>
        </Container>
      </Section>
    </>
  );
}
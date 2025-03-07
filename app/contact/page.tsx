import ContactForm from "@/app/_components/ContactForm";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        For questions or consultations, please contact us using the form below.
        <br />
        After reviewing your inquiry, a representative will get in touch with
        you within 3 business days.
      </p>
      <ContactForm />
    </div>
  );
}

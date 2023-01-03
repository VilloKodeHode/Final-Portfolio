import NavBar from "../../component/NavBar/NavBar";
import ContactSection from "../../component/Portfolio/ContactSection/ContactSection";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="bg-purple-900 rounded-xl p-4 m-20">
        <ContactSection />
      </div>
    </>
  );
}

export default ContactPage;

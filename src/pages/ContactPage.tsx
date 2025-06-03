import "../App.css";
import "../pages-css/ContactPage.css";
import Footer from "../components/Footer";
import instagramLogo from "../assets/Instagram_icon.png";
import gmailLogo from "../assets/google-gmail-512.webp";

function ContactPage() {
  return (
    <div className="contact-page-container">
      <div className="contact-page-content">
        <div className="contact-page-center">
          <h1>Contact Us</h1>
          <div className="contact-page-link">
            <a href="mailto:teamfirehose2028@gmail.com">
              <img src={gmailLogo} alt="Gmail logo"></img>
            </a>
            <h2>teamfirehose2028@gmail.com</h2>
          </div>
          <div className="contact-page-link">
            <a href="https://www.instagram.com/team_firehose/">
              <img src={instagramLogo} alt="Instagram logo"></img>
            </a>
            <h2>team_firehose</h2>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default ContactPage;

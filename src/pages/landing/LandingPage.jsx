import Footer from "../../footer/Footer"
import Header from "../../header/Header"
import "./LandingPageStyles.css"

export default function LandingPage() {
  return (
    <>
      <Header />
      <div className="landing-page-container">
          <div className="welcome-section">
              <div className="join-us-container">
                  <h5>This is temp text</h5>
                  <p>I&apos;m so glad you decided to join us!</p>
                  <button className="register-btn">Register</button>
              </div>
              <div className="join-us-media-container">
                <div className="placeholder-media">I am gonna be an image</div>
              </div>
          </div>
          <div className="additional-info-section">

          </div>
      </div>
      <Footer />
    </>
  )
}

export default function MainContent() {

  return (
    <main>
      <h1 className="main--name">Gino Hagad</h1>
      <h4 className="main--position">Frontend Developer</h4>
      <p className="main--website">ginohagad.com</p>
      <div className="main--buttons">
        <button className="button-email"><FontAwesomeIcon icon="fa-solid fa-envelope" />Email</button>
        <button className="button-linkedin">LinkedIn</button>
      </div>
      <h3 className="main--section-title">About</h3>
      <p className="main--content">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always looking for new things to learn.</p>
      <h3 className="main--section-title">Interests</h3>
      <p className="main--content">Food expert. Music Production. Internet fanatic. Coffee fanatic.</p>
    </main>
  )
}

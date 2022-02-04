import "./Intro.css";

const Intro = () => {
  return <div className="i">
      <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Xavier GUERET</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web Developper</div>
                      <div className="i-title-item">UI/UX Designer</div>
                      <div className="i-title-item">Photographer</div>
                      <div className="i-title-item">Writer</div>
                      <div className="i-title-item">Content Creator</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="i-right">right</div>
  </div>;
};

export default Intro;

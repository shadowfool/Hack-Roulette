/* global
  React
  ReactRouter
*/

const Link = ReactRouter.Link;

window.NavbarView = (props) => (
  <nav className="navbar navbar-default">

    <p className="navbar-text">Hack Roulette</p>

    <button className="btn btn-default navbar-btn pull-right" onClick={props.videoHandler}>
      <Link to="/login">
        Log Out
      </Link>
    </button>

    <button className="btn btn-default navbar-btn pull-right" onClick={props.videoHandler}>
      <Link to="/helper">
        Become a Helper
      </Link>
    </button>

    <button className="btn btn-default navbar-btn pull-right" onClick={props.videoHandler}>
      <Link to="/">
        [TEMP] HOME
      </Link>
    </button>

    <button className="btn btn-default navbar-btn pull-right" onClick={props.videoHandler}>
      <Link to="/screenshare">
        [TEMP] Screenshare
      </Link>
    </button>

    <button className="btn btn-default navbar-btn pull-right" onClick={props.videoHandler}>
      <Link to="/feedback">
        [TEMP] Feedback
      </Link>
    </button>

  </nav>
);

import React from "react";
import { Link } from "react-router-dom";


const FooterSection = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted text-center">© 2010 - 2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-muted" to="#">Cool stuff</Link></li>
              <li><Link className="text-muted" to="#">Random feature</Link></li>
              <li><Link className="text-muted" to="#">Team feature</Link></li>
              <li><Link className="text-muted" to="#">Stuff for developers</Link></li>
              <li><Link className="text-muted" to="#">Another one</Link></li>
              <li><Link className="text-muted" to="#">Last time</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-muted" to="#">Resource</Link></li>
              <li><Link className="text-muted" to="#">Resource name</Link></li>
              <li><Link className="text-muted" to="#">Another resource</Link></li>
              <li><Link className="text-muted" to="#">Final resource</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-muted" to="#">Team</Link></li>
              <li><Link className="text-muted" to="#">Locations</Link></li>
              <li><Link className="text-muted" to="#">Privacy</Link></li>
              <li><Link className="text-muted" to="#">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default FooterSection;
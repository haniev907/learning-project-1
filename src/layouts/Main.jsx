import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="text-center my-5">
      <div className="row">
        <div className="col-lg-6 col-md-8 mx-auto">
          <img
            className="rounded-img"
            src="https://avatars.mds.yandex.net/i?id=806717974c23bc04e519d6ddb93fe058-5554842-images-thumbs&n=13"
            alt="kartina"
          />
          <h1 className="fw-light">Welcome to main page</h1>
          <p className="lead text-muted">
            How the table is arranged:{" "}
            <strong>
              Deleting users by ID,User archiving, Adding and Editing Users,
              Each user's personal account
            </strong>
          </p>
          <p className="lead text-muted">
            Table written in: HTML/CSS/React.js/Redux/React-Router
          </p>
          <p className="lead text-muted" style={{ fontWeight: "900" }}>
            * The project is not ready yet, the rest of the logic is being
            added...
          </p>
          <Link to="/Users">
            <button className="btn btn-primary">Open table</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

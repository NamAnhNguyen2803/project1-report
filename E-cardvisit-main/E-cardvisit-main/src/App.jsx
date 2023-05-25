import React from 'react';
import user1 from "./pages/user.json"

var ID = 0;
var user = user1[ID];

const fast_icon = user.social_media.map((links) => (
  <div key={links.ID} className="list-inline-item justify-content-between fa-xs">
    {links.ID === "facebook" && (
      <a href={links.link}><i className="bi bi-facebook bi-3x"></i></a>
    )}
    {links.ID === "instagram" && (
      <a href={links.link}><i className="bi bi-instagram"></i></a>
    )}
    {links.ID === "linkedin" && (
      <a href={links.link}><i className="bi bi-linkedin"></i></a>
    )}
    {links.ID === "twitter" && (
      <a href={links.link}><i className="bi bi-twitter"></i></a>
    )}
    {links.ID === "email" && (
      <a href={`mailto:${links.link}`}><i className="bi bi-envelope"></i></a>
    )}
  </div>
));

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto">
          <div className="mx-auto text-center">
            <img src="./img/71e42070-d8ef-488e-b916-276e56336e003.jpg" alt="Avatar" className="rounded-circle m-4 mx-auto text-center" />
            <span className="name text-center">
              <h1>{user.name}</h1>
            </span>
            <span className="description text-center">
              <p>
                {user.title}<br></br>
                {user.organization}
              </p>
            </span>
          </div>

          <button className="btn btn-download  btn-outline-info m-4 d-flex w-60 mx-auto">
            <a href="./contact/test.vcf" download>
              <span className><i className="bi bi-download " />
                <span className="ms-3"> Lưu thông tin</span>
              </span>
            </a>
          </button>

          <div className="fast-icon mx-auto text-center fa-xs">
            {fast_icon}
          </div>

          <div className="social_media-box">
            <div className="social_media-bg mx-auto pt-2 pb-4 rounded-top border">
              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <span className="btn-icon "><i className="bi bi-envelope " /></span>
                <span className="ms-3">Email</span>
              </button>
              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <i className="bi bi-phone " />
                <span className="ms-3">Phone</span>
              </button>
              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <span className="btn-icon "><i className="bi bi-linkedin " /></span>
                <span className="ms-3">Linked-in</span>
              </button>
              <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto">
                <span className="btn-icon "><i className="bi bi-facebook " /></span>
                <span className="ms-3">Social Media</span>
              </button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

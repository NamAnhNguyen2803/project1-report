import User from './User'
import React from 'react';
import user1 from "./pages/user.json"
var count = "Nam Anh dep trai";
var user = User;
// var user1 = "./pages/user.json";
const App = () => {
  return (
    <div>
      <div className="container ">
        <div className="row ">
          <div className="mx-auto ">
            <div className="mx-auto text-center">
              <img src="./img/71e42070-d8ef-488e-b916-276e56336e003.jpg" alt="Avatar" className="rounded-circle m-4 mx-auto text-center" />
              <span className="name text-center">
                <h3>{user.name}</h3>
                <h1>{user1.name}</h1>
              </span>
              <span className="description text-center">
                <p className=" "><br />
                  Intern tại Vlaser
                </p>
              </span>
            </div>
            <button className="btn btn-download  btn-outline-info m-4 d-flex w-60 mx-auto ">
              <a href="./contact/test.vcf" download>
                <span className><i className="bi bi-download " />
                  <span className="ms-3"> Lưu thông tin</span></span></a>
            </button>
            <div className="fast-icon mx-auto text-center ">
              <div className="box-fast-icon ">
                <i className="bi bi-instagram resize-icon"><a className="m-2" href="https://www.instagram.com/28.3.real_g/" /></i>
                <i className="bi bi-facebook resize-icon" /><a href="https://www.facebook.com/profile.php?id=100010006120091" />
              </div>
            </div>
            <div className="social_media-box ">
              <div className="social_media-bg mx-auto pt-2 pb-4 rounded-top border">
                <button className="btn btn-outline-success m-2 d-flex w-75 mx-auto ">
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
                </button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

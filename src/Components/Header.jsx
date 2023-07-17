import React from 'react';
import icon_img from "../assets/icon_img.jpg"
import { useEffect } from 'react';
import { useState } from 'react';


export default function Header() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999, backgroundColor: '#ffffff'       ,  fontFamily:"Oswald",}}>
      <div className="container-fluid">
        {/* Image and text */}
        <nav className="navbar navbar-light bg-light navbar-lg ">
          <a className="navbar-brand p-2  " href="#"
          style={{
    
            display: "flex"
          }}>
            <img
              src={icon_img}
              width={50}
              height={50}
              className="d-inline-block align-top rounded"
              alt=""
              style={{
                marginRight: 1,
              }}
            />
             <h2 style={{
                marginLeft: 5,
                paddingTop: "INHERIT",
                height: "50%",
              }}>HT CARD</h2>
          </a>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Trang chủ <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sản phẩm
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Thẻ E-Card(Cơ bản)
                    </a>
                    <a className="dropdown-item" href="#">
                      Thẻ E-Card(Nâng cao)
                    </a>
                    <a className="dropdown-item" href="#">
                      Danh thiếp bảo hiểm
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kiến thức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </nav>
      </div>
    </div>



  )
}

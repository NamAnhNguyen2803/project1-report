import React from 'react'
import '../App.css';
import 'animate.css';
import Fade from 'react-reveal/Fade'


export default function Contents() {
  return (
      <>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active mb-10">
              <img
                className="d-block mx-auto border-bottom border-secondary border-100"
                src="https://assets-global.website-files.com/617ac0d059899a69fd8216ec/638d6f8e2c86b779b2e71e7a_make-an-nfc-business-card-in-photoshop-og-p-800.png"
                style={{ width: "auto", height: 720, maxWidth: "100%", marginBottom:50}}
                alt="First slide"
              />
            </div>
          </div>
        </div>



        <div className="row  mx-auto container "
        style={{
          fontFamily: "Oswald"
        }}>
          <div className="col-sm-8 "> 
          <Fade left>
            <h1
              style={{
                fontSize: "50px",
              }}
            >Danh thiếp thông minh NFC</h1>
            <h2>Chia sẻ thông tin cá nhân chỉ trong một chạm!</h2>
            </Fade>
            <div  
            style={{
                fontSize: "20px",
              }}>
            <p
             
            >🌟 Chào mừng đến với thế giới của danh thiếp thông minh NFC - một cách tiên tiến và thú vị để chia sẻ thông tin cá nhân! </p>

            <p>🤝 Bạn đã bao giờ cảm thấy bất tiện khi phải viết hoặc nhập thông tin cá nhân như số điện thoại, địa chỉ email, hay trang web vào một tờ giấy nhỏ? Danh thiếp thông minh NFC đã đến để giải quyết vấn đề này! Với công nghệ NFC tích hợp, việc chia sẻ thông tin trở nên dễ dàng chỉ với một chạm nhẹ.
            </p><p>
            💡 Bạn chỉ cần cung cấp một danh thiếp thông minh NFC cho đối tác hoặc bạn bè của mình, và họ có thể dễ dàng truy cập và lưu trữ thông tin cá nhân của bạn trực tiếp trên điện thoại di động của họ. Không cần gõ số điện thoại hay nhập email một cách cồng kềnh nữa. Quá tiện lợi, phải không?
            </p><p>
            📱 Ngoài việc chia sẻ thông tin cơ bản như số điện thoại và email, danh thiếp thông minh NFC còn cho phép bạn chia sẻ các thông tin khác như địa chỉ công ty, tài khoản mạng xã hội, trang web cá nhân và nhiều hơn nữa. Bạn có thể tùy chỉnh và cập nhật thông tin cá nhân của mình từ điện thoại di động một cách dễ dàng, mà không cần phải in lại danh thiếp.
            </p><p>
            💼 Không chỉ mang lại sự tiện lợi, danh thiếp thông minh NFC còn tạo nên một ấn tượng chuyên nghiệp và hiện đại. Đây là một cách tiên phong và độc đáo để giao tiếp trong thế giới kỹ thuật số ngày nay.
            </p><p>
            💡 Hãy cùng trải nghiệm danh thiếp thông minh NFC và khám phá sự thuận tiện và tốc độ của việc chia sẻ thông tin cá nhân. Bước vào thời đại kết nối hiện đại với danh thiếp thông minh NFC!</p>
        </div></div>
        
        <div className="col-sm-4 container "
        style={{
          container: {
            position: 'relative',
          },
        }}
        >
          <img className="image1 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hTf4Spw_xEv62mGa6EBwOmuZzpWh0MnQPw&usqp=CAU'
          style={{
            
              position: 'relative',
              zIndex: -1,
              width : "400px",
              height: "400px",
              left: 80,
              top: 10,
              objectFit: "cover"
            
          }}
         ></img>
          <img className="image2" src="https://m.media-amazon.com/images/I/61TXM1gbkVL._AC_UF894,1000_QL80_.jpg" alt="Image 1" 
        style={
          {
            width : "400px",
            height: "400px",
            objectFit: "cover",
            position : "relative",
            top: -60,
            left: 0,
            zIndex: 1,
          }
        }
          ></img>
          </div>
        </div>
        <div className="product-guide container border "
          style={{ 
            zIndex: 2,  
            filter: "blur(6px)",
            backgroundImage:"URL('https://assets-global.website-files.com/617ac0d059899a69fd8216ec/6372d84fd3c792548b0c0d47_NFC%20Blog%20OG%202.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            height:"720px",
            objectFit:"Cover",
          }}
       >
        </div>
      <div className="img-content mx-auto border align-items-center ">
 
        <h1 className=''
        style={{
          fontFamily: "Oswald",
          color: "white",
          fontSize: "60px"

        }}>Chia sẻ thông tin cá nhân chỉ với 1 chạm</h1>
      </div>



      {/* sadfa */}
      <div className="row mx-auto container">
      <div className="col mx-auto"
        style={{
          position: "relative",
          paddingTop: "20%",
          fontFamily: "Public Sans",
          fontSize: "30px"
        }}>
          <Fade left>
          <h2 style={{
          fontSize: "50px"
          }}
          >Chia sẻ thông tin nhanh chóng</h2>
          </Fade>
        </div>
  <div className="col">
    <img
      src="https://griffycard.com/cdn/shop/files/profile_750x.png?v=1645099131"
      alt=""
      className="border"
      style={{
        width: 600,
        height: 600,
      }}
    />
  </div>
</div>

      <div className="row mx-auto container"> 
      <div className="col ">
          <img src="https://griffycard.com/cdn/shop/files/magic_business_card_final-01_1_750x.png?v=1645098074" alt="" className='border'
          style={{
            width: 600,
            height: 600,
          }}/>
        </div>
        <div className="col mx-auto"
        style={{
          position: "relative",
          paddingTop: "20%",
          fontFamily: "Public Sans",
          fontSize: "30px"
        }}>
          <Fade right>
          <h2 style={{
          fontSize: "50px"
          }}
          >Chỉ qua một lần chạm</h2>
          </Fade>
        </div>
      </div>


      <div className="row mx-auto container">
        <div className="col mx-auto"
        style={{
          position: "relative",
          paddingTop: "20%",
          fontFamily: "Public Sans",

          fontSize: "30px"
        }}>
          <Fade left>
          <h2 style={{
          fontSize: "50px"
          }}>Với giao diện bắt mắt</h2>
          </Fade>
        </div>
        <div className="col">
          <img src="https://tapmo.in/cdn/shop/products/TapMo.gif?v=1680153153" alt=""  className='border'
          style={{
            width: 600,
            height: 600,
          }}/>
        </div>
      </div>


        <div className="product-type container">
          <h1 className=''
          style={{
            fontFamily:"Oswald",

          }}>Các loại sản phẩm</h1>
        </div>
        {/* Carousel wrapper */}
        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          {/* Controls */}

          {/* Inner */}
          <div className="carousel-inner py-4">
            {/* Single item */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card">
                      <img
                        src="https://m.media-amazon.com/images/I/61dAdy61mIL.jpg"
                        className="card-img-top"
                        alt="Waterfall"
                        style={{ objectFit: "cover", height: "300px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card mặc định</h5>
                        <p className="card-text">
                          Giá : xx.000Đ</p><p>
                          Mô tả: Business card nhựa và trang web giới thiệu hiện đại
                        </p>
                        <a href="#!" className="btn btn-primary">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://www.puremetalcards.com/wp-content/uploads/2015/01/Pure-Metal-Cards-brushed-steel-NFC-Travel-Card-017.jpg"
                        className="card-img-top"
                        alt="Sunset Over the Sea"
                        style={{ objectFit: "cover", height: "300px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card kim loại</h5>
                        <p className="card-text">
                          Giá : xxx.000Đ</p><p>
                          Mô tả: Business card kim loại ấn tượng và trang web giới thiệu sang trọng
                        </p>
                        <a href="#!" className="btn btn-primary">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0654/2229/5259/products/TapMo.gif?v=1680153153"
                        className="card-img-top"
                        alt="Sunset over the Sea"
                        style={{ objectFit: "cover", height: "300px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card custom</h5>
                        <p className="card-text">
                          Giá : xxx.000Đ</p><p>
                          Mô tả: Business card được thiết kế theo yêu cầu của quý khách
                        </p>
                        <a href="#!" className="btn btn-primary">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div className="product-feedback">
          <p>Phản hồi của khách hàng https://griffycard.com/</p>
        </div>
        <div className="product-partner">
          <p>Đối tác đã sử dụng sản phẩm</p>
        </div>

    </>


  )
}

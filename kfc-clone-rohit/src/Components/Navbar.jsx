const Navbar = () => {
  return (
    <>
      <div className="rb-header">
        <ul>
          <div className="rb-logo-part">
            <li>
              <a href="#">
                <img
                  src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
            <li>Menu</li>
            <li>Deals</li>
          </div>
        </ul>
        <ul>
          <div className="rb-left-head">
            <li>
              <a href="#">
                <img
                  src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
            <li>Sign In</li>
          </div>
          <div className="rb-right-head">
            <li>₹ 0</li>
            <li>
              <a href="#">
                <img
                  className="rb-combo-logo"
                  src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

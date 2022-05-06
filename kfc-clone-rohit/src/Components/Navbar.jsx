const Navbar = () => {
  return (
    <>
      <div class="rb-header">
        <ul>
          <div class="rb-logo-part">
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
          <div class="rb-left-head">
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
          <div class="rb-right-head">
            <li>₹ 0</li>
            <li>
              <a href="#">
                <img
                  class="rb-combo-logo"
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

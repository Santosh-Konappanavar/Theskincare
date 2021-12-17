function navbar(){
    return `  <div id="header">
    <div id="container">
        <div><a href="index.html">
            <img src="https://cdn.shopify.com/s/files/1/0415/0548/9058/files/Logo__theskinstore.in_Logo_2-02_200x@2x.png?v=1606890994" style="max-width: 200px;height: 275; width: 843; margin-left: 20px;cursor: pointer;" /></a>
        </div>
        <div id="search">
            <div> 
                <input type="text" placeholder="Search..." id="searchinput" />
            </div>
            <button id="searchbtn">
                <svg id="icon" viewBox="0 0 21 21" role="presentation">
                    <g stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd">
                        <path d="M19 19l-5-5" stroke-linecap="square"></path>
                        <circle cx="8.5" cy="8.5" r="7.5"></circle>
                      </g>
                </svg>
            </button>
        </div>
        <div >
          <div id="login">
            <span id="log">Login / Signup</span>
            <p id="myacount"><a href="login.html">My account</a></p>
          </div>
           
        </div>
        <div>
          <div id="line"></div>
        </div>
        <div>
        <div id="cartbox">
          <div id="cartdiv">
            <span>
              <svg focusable="false" id="box" viewBox="0 0 27 24" role="presentation">
                <g transform="translate(0 1)" stroke-width="2" stroke="currentColor" fill="none" fill-rule="evenodd">
                  <circle stroke-linecap="square" cx="11" cy="20" r="2"></circle>
                  <circle stroke-linecap="square" cx="22" cy="20" r="2"></circle>
                  <path d="M7.31 5h18.27l-1.44 10H9.78L6.22 0H0"></path>
                </g>
              </svg>
              <span id="count">0</span>
            </span>
          </div>
          <div><a href="cart.html">
            <span id="cart">Cart</span></a>
          </div>
        </div>
      </div>
    </div>
</div>
<div id="belownav">
  <div id="belownavbox">
    <ul>
      <li>SKIN</li>
      <li>HAIR</li>
      <li>MAKEUP</li>
      <li>PERSONAL CARE</li>
      <li>BABY & MOM</li>
      <li>HOUSEHOLD & SUPPLIES</li>
      <li>BRANDS</li>
      <li>YOUR CONCERN</li>
      <li>WISHLISTS</li>
      <li>REWARDS</li>
    </ul>
  </div>
</div>`
}
export default navbar
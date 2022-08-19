function Choose() {
  return (
    <>
      <div className="choose--background">
        <div className="container">
          <div className="choose--title">
            <h2>Choose Plan</h2>
          </div>
        </div>
        <div className="choose--flex container">
          <div>
            <h2>Basic</h2>

            <div className="choose--flex--relative">
              <p>$</p>
              <p>19</p>
              <p>/MO</p>
              <div className="choose--flex--absolute"></div>
            </div>
            <div className="choose--flex--details">
              <p>
                <span>5</span>Domain Uses
              </p>
              <p>
                14+<span>wordpress</span> theme
                <p>
                  34+<span>HTML</span> template
                </p>
                <p>
                  <span>2TB</span>Storage
                </p>
              </p>
            </div>
            <a href="">
              <button>Sign In</button>
            </a>
          </div>
          <div>
            <h2>Standard</h2>
            <div className="choose--flex--relative">
              <p>$</p>
              <p>39</p>
              <p>/MO</p>
              <div className="choose--flex--absolute"></div>
            </div>
            <div className="choose--flex--details">
              <p>
                <span>15</span>Domain Uses
              </p>
              <p>
                24+<span>wordpress</span> theme
                <p>
                  54+<span>HTML</span> template
                </p>
                <p>
                  <span>5TB</span>Storage
                </p>
              </p>
            </div>
            <a href="">
              <button>Sign In</button>
            </a>
          </div>
          <div>
            <h2>Premium</h2>
            <div className="choose--flex--relative">
              <p>$</p>
              <p>59</p>
              <p>/MO</p>
              <div className="choose--flex--absolute"></div>
            </div>
            <div className="choose--flex--details">
              <p>
                <span>59</span>Domain Uses
              </p>
              <p>
                59+<span>wordpress</span> theme
                <p>
                  59+<span>HTML</span> template
                </p>
                <p>
                  <span>9TB</span>Storage
                </p>
              </p>
            </div>
            <a href="">
              <button>Sign In</button>
            </a>
          </div>
          <div>
            <h2>Pro</h2>
            <div className="choose--flex--relative">
              <p>$</p>
              <p>99</p>
              <p>/MO</p>
              <div className="choose--flex--absolute"></div>
            </div>
            <div className="choose--flex--details">
              <p>
                <span>100+</span>Domain Uses
              </p>
              <p>
                100+<span>wordpress</span> theme
                <p>
                  100+<span>HTML</span> template
                </p>
                <p>
                  <span>50TB</span>Storage
                </p>
              </p>
            </div>
            <a href="">
              <button>Sign In</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;

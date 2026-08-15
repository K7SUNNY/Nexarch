import "../../App.css";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="24px"
              height="24px"
            >
              {/* Background */}
              <rect width="100" height="100" rx="20" fill="#f1f1f1" />

              <g
                fill="#000"
                stroke="#000"
                strokeWidth="7"
                strokeLinecap="round"
              >
                {/* Left vertical bar */}
                <line x1="30" y1="25" x2="30" y2="75" />

                {/* Right vertical bar */}
                <line x1="74" y1="25" x2="74" y2="75" />

                {/* Top-left diagonal segment */}
                <line x1="30" y1="25" x2="63" y2="53" />

                {/* Bottom-right diagonal segment */}
                <line x1="41" y1="51" x2="74" y2="75" />

                {/* Four outer large nodes */}
                <circle cx="30" cy="25" r="9" stroke="none" />
                <circle cx="30" cy="75" r="9" stroke="none" />
                <circle cx="74" cy="25" r="9" stroke="none" />
                <circle cx="74" cy="75" r="9" stroke="none" />

                {/* Two inner diagonal end nodes */}
                <circle cx="63" cy="53" r="5.5" stroke="none" />
                <circle cx="41" cy="51" r="5.5" stroke="none" />
              </g>
            </svg>
          </div>
          <span className="logo-text">Nexarchr</span>
        </div>

        <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
          <div className="search-input-wrapper">
            <input type="text" placeholder="Search" />
          </div>
          <button className="search-btn" type="submit" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </form>

        <div className="actions-nav">
          <button className="action-button" id="save-as">
            Save as
          </button>
          <button className="action-button" id="export">
            Export
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

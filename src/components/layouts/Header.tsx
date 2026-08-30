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
          <button className="action-nav-button" id="refresh-save">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 20 20"
            >
              <rect x="0" fill="none" width="20" height="20" />

              <g>
                <path
                  d="M14.8 9c.1-.3.2-.6.2-1 0-2.2-1.8-4-4-4-1.5 0-2.9.9-3.5 2.2-.3-.1-.7-.2-1-.2C5.1 6 4 7.1 4 8.5c0 .2 0 .4.1.5-1.8.3-3.1 1.7-3.1 3.5C1 14.4 2.6 16 4.5 16h10c1.9 0 3.5-1.6 3.5-3.5 0-1.8-1.4-3.3-3.2-3.5zm-6.3 5.9l-3.2-3.2 1.4-1.4 1.8 1.8 3.8-3.8 1.4 1.4-5.2 5.2z"
                  fill="#ffffff"
                />
              </g>
            </svg>
          </button>
          <button className="action-nav-button" id="save-as">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 20.75H7C6.27065 20.75 5.57118 20.4603 5.05546 19.9445C4.53973 19.4288 4.25 18.7293 4.25 18V6C4.25 5.27065 4.53973 4.57118 5.05546 4.05546C5.57118 3.53973 6.27065 3.25 7 3.25H14.5C14.6988 3.25018 14.8895 3.32931 15.03 3.47L19.53 8C19.6707 8.14052 19.7498 8.33115 19.75 8.53V18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75ZM7 4.75C6.66848 4.75 6.35054 4.8817 6.11612 5.11612C5.8817 5.35054 5.75 5.66848 5.75 6V18C5.75 18.3315 5.8817 18.6495 6.11612 18.8839C6.35054 19.1183 6.66848 19.25 7 19.25H17C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18V8.81L14.19 4.75H7Z"
                fill="#ffffff"
              />
              <path
                d="M16.75 20H15.25V13.75H8.75V20H7.25V13.5C7.25 13.1685 7.3817 12.8505 7.61612 12.6161C7.85054 12.3817 8.16848 12.25 8.5 12.25H15.5C15.8315 12.25 16.1495 12.3817 16.3839 12.6161C16.6183 12.8505 16.75 13.1685 16.75 13.5V20Z"
                fill="#ffffff"
              />
              <path
                d="M12.47 8.75H8.53001C8.3606 8.74869 8.19311 8.71403 8.0371 8.64799C7.88109 8.58195 7.73962 8.48582 7.62076 8.36511C7.5019 8.24439 7.40798 8.10144 7.34437 7.94443C7.28075 7.78741 7.24869 7.61941 7.25001 7.45V4H8.75001V7.25H12.25V4H13.75V7.45C13.7513 7.61941 13.7193 7.78741 13.6557 7.94443C13.592 8.10144 13.4981 8.24439 13.3793 8.36511C13.2604 8.48582 13.1189 8.58195 12.9629 8.64799C12.8069 8.71403 12.6394 8.74869 12.47 8.75Z"
                fill="#ffffff"
              />
            </svg>
            Save as
          </button>
          <button className="action-nav-button" id="export">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g opacity="0.4">
                <path
                  d="M12 15.0001V3.62012"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3504 5.85L12.0004 2.5L8.65039 5.85"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            Export
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

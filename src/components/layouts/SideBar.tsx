import { useState } from "react";
import "../../App.css";
import "../../styles/layout.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(true);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* header */}
      <div className="sidebar-header">
        <div className="project-name">
          <span className="project-name-item">Project Name</span>
        </div>
        <div
          className="sidebar-toggle"
          onClick={() => setIsCollapsed((prev) => !prev)}
          role="button"
          tabIndex={0}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsCollapsed((prev) => !prev);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path d="M14.657 18.657a1 1 0 0 1-.707-.293l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-.707 1.707z" />
          </svg>
        </div>
      </div>

      {/* main content */}
      <div className="sidebar-content">
        <div className="action-buttons">
          <div className="new-window action-buttons-item" title="New page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g id="Complete">
                <g data-name="add" id="add-2">
                  <g>
                    <line
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="12"
                      x2="12"
                      y1="19"
                      y2="5"
                    />
                    <line
                      fill="none"
                      stroke="#ffffff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="5"
                      x2="19"
                      y1="12"
                      y2="12"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span className="new-text action-desktop">New page</span>
          </div>
          <div
            className="open-project action-buttons-item"
            title="Open Project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 13H15M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="project-text action-desktop">Open Project</span>
          </div>
        </div>
        <div className="sidebar-tools">
          <div
            className="tools-toggle"
            onClick={() => setIsToolsOpen((prev) => !prev)}
            role="button"
            tabIndex={0}
            aria-expanded={isToolsOpen}
            aria-label="Toggle select & place tools"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsToolsOpen((prev) => !prev);
              }
            }}
          >
            <span className="tools-title action-desktop">
              Select & place tools
            </span>
            <div
              className={`tools-toggle-svg ${isToolsOpen ? "open" : "closed"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          {/* Demo tools */}
          {isToolsOpen && (
            <ul className="tools-list action-desktop">
              <li className="tool-item">
                <span className="tool-bullet"></span>
                <span>Select Tool</span>
              </li>
              <li className="tool-item">
                <span className="tool-bullet"></span>
                <span>Wall & Structure</span>
              </li>
              <li className="tool-item">
                <span className="tool-bullet"></span>
                <span>Doors & Windows</span>
              </li>
              <li className="tool-item">
                <span className="tool-bullet"></span>
                <span>Objects & Fixtures</span>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* footer */}
      <div className="sidebar-footer">
        {/* profile */}
        <div className="profile-item" title="User Name">
          <div className="profile-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14px"
              height="14px"
              viewBox="0 0 20 20"
              version="1.1"
            >
              <title>profile_round [#1346]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-380.000000, -2119.000000)"
                  fill="#ffffff"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M338.083123,1964.99998 C338.083123,1962.79398 336.251842,1960.99998 334,1960.99998 C331.748158,1960.99998 329.916877,1962.79398 329.916877,1964.99998 C329.916877,1967.20599 331.748158,1968.99999 334,1968.99999 C336.251842,1968.99999 338.083123,1967.20599 338.083123,1964.99998 M341.945758,1979 L340.124685,1979 C339.561214,1979 339.103904,1978.552 339.103904,1978 C339.103904,1977.448 339.561214,1977 340.124685,1977 L340.5626,1977 C341.26898,1977 341.790599,1976.303 341.523154,1975.662 C340.286989,1972.69799 337.383888,1970.99999 334,1970.99999 C330.616112,1970.99999 327.713011,1972.69799 326.476846,1975.662 C326.209401,1976.303 326.73102,1977 327.4374,1977 L327.875315,1977 C328.438786,1977 328.896096,1977.448 328.896096,1978 C328.896096,1978.552 328.438786,1979 327.875315,1979 L326.054242,1979 C324.778266,1979 323.773818,1977.857 324.044325,1976.636 C324.787453,1973.27699 327.107688,1970.79799 330.163906,1969.67299 C328.769519,1968.57399 327.875315,1966.88999 327.875315,1964.99998 C327.875315,1961.44898 331.023403,1958.61898 334.733941,1959.04198 C337.422678,1959.34798 339.650022,1961.44698 340.05323,1964.06998 C340.400296,1966.33099 339.456073,1968.39599 337.836094,1969.67299 C340.892312,1970.79799 343.212547,1973.27699 343.955675,1976.636 C344.226182,1977.857 343.221734,1979 341.945758,1979 M337.062342,1978 C337.062342,1978.552 336.605033,1979 336.041562,1979 L331.958438,1979 C331.394967,1979 330.937658,1978.552 330.937658,1978 C330.937658,1977.448 331.394967,1977 331.958438,1977 L336.041562,1977 C336.605033,1977 337.062342,1977.448 337.062342,1978"
                      id="profile_round-[#1346]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="userName">
            <span className="user-name">User Name</span>
          </div>
        </div>
        <div className="logout-action" title="Logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            version="1.1"
          >
            <title>logout</title>
            <path d="M0 9.875v12.219c0 1.125 0.469 2.125 1.219 2.906 0.75 0.75 1.719 1.156 2.844 1.156h6.125v-2.531h-6.125c-0.844 0-1.5-0.688-1.5-1.531v-12.219c0-0.844 0.656-1.5 1.5-1.5h6.125v-2.563h-6.125c-1.125 0-2.094 0.438-2.844 1.188-0.75 0.781-1.219 1.75-1.219 2.875zM6.719 13.563v4.875c0 0.563 0.5 1.031 1.063 1.031h5.656v3.844c0 0.344 0.188 0.625 0.5 0.781 0.125 0.031 0.25 0.031 0.313 0.031 0.219 0 0.406-0.063 0.563-0.219l7.344-7.344c0.344-0.281 0.313-0.844 0-1.156l-7.344-7.313c-0.438-0.469-1.375-0.188-1.375 0.563v3.875h-5.656c-0.563 0-1.063 0.469-1.063 1.031z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import "../../App.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span>heading</span>
        <div className="sidebar-toggle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path d="M14.657 18.657a1 1 0 0 1-.707-.293l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-.707 1.707z" />
          </svg>
        </div>
      </div>
      <div className="sidebar-content">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <div className="footer-item">Footer Item 1</div>
        <div className="footer-item">Footer Item 2</div>
      </div>
    </div>
  );
}

export default Sidebar;

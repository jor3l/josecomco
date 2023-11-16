export default ({ title, children }) => {
  return (
    <div class="container">
      <div class="title">
        <div class="pull-right">
          <button class="minimize">
            <span class="fa fa-minus"></span>
          </button>
          <button class="expand">
            <span class="fa fa-square-o"></span>
          </button>
          <button class="times">
            <span class="fa fa-times"></span>
          </button>
        </div>
        <h1>
          <div class="icon-my-computer"></div> {title || "New file"}
        </h1>
      </div>
      <ul class="toolbar">
        <li>
          <u>F</u>ile
        </li>
        <li>
          <u>E</u>dit
        </li>
        <li>
          <u>V</u>iew
        </li>
        <li>
          <u>H</u>elp
        </li>
      </ul>
      <div class="container-inner">{children}</div>
      <div class="statusbar">
        <div
          class="left"
          title="this website was created with resources freely avaiable on codepen and gifcities"
        >
          2023.
        </div>
        <div class="right">Last saved by Jose Vera on Nov 15, 2023.</div>
      </div>
    </div>
  );
};

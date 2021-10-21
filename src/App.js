import "./App.css";
import "./animation.scss";
import Type from "./Type";

function App() {
  return (
    <div className="monitor">
      <section className="screen">
        <div className="content on">
          <Type speed={5} delay={3000}>
            <span className="line">
              Welcome to JoseOS LTS 0.2.0 (GNU/Linux 4.4.0-141-generic x86_64)
            </span>
            <br />
            <br />
            <span className="line">
              [ OK ] Started Show Plymouth Boot Screen.
            </span>
            <span className="line">
              [ OK ] Started Forward Password Requests to Plymouth Directory
              Watch.
            </span>
            <span className="line">
              [ OK ] Reached target Encrypted Volumes.
            </span>
            <span className="line">[ OK ] Reached target Paths.</span>
            <span className="line">[ OK ] Found device /dev/serial1.</span>
            <span className="line">[ OK ] Found device /dev/ttyS0.</span>
            <span className="line">.</span>
            <span className="line">.</span>
            <span className="line">[ OK ] Reached target Sockets.</span>
            <span className="line">[ OK ] Reached target Basic System.</span>
            <span className="line">
              Starting triggerhappy global hotkey daemon...
            </span>
            <span className="line">Starting dhcpcd on all interfaces...</span>
            <span className="line">Starting Avahi mDNS/DNS-SD Stack...</span>
            <span className="line">Starting rng-tools.service...</span>
            <span className="line">
              Starting LSB: Switch to ondemand cpuâ€¦or (unless shift key is
              pressed)...
            </span>
            <span className="line">Starting System Logging Service...</span>
            <span className="line">Starting Login Service...</span>
            <span className="line">
              Starting Disable WiFi if country not set...
            </span>
            <span className="line">
              [ OK ] Started Daily apt download activities.
            </span>
            <span className="line">
              [ OK ] Started Daily apt upgrade and clean activities.
            </span>
            <span className="line">[ OK ] Reached target Timers.</span>
            <span className="line">.</span>
            <span className="line">.</span>
            <span className="line">
              [ OK ] Started triggerhappy global hotkey daemon.
            </span>
            <span className="line">[ OK ] Started System Logging Service.</span>
            <span className="line">
              [ OK ] Started dhcpcd on all interfaces.
            </span>
            <span className="line">[ OK ] Started rng-tools.service.</span>
            <span className="line">
              [ OK ] Started Disable WiFi if country not set.
            </span>
            <span className="line">[ OK ] Started Login Service.</span>
          </Type>
        </div>
      </section>
    </div>
  );
}

export default App;

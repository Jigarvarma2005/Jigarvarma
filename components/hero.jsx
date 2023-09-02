
import Typed from "react-typed";
import config from "../config";

export default function Hero() {
  function EmailAlertIt() {
    if (window.confirm(`Send mail to ${config.email} ?`))
      window.location = `mailto:${config.email}`;
  }
  
  function AlertIt() {
    if (window.confirm("Open Telegram?"))
      window.location = `https://t.me/${config.tgUsername}`;
  }

  return (
    <div className={"container mt-5"}>
      <h3>
        <kbd className={"text-light"}>{config.heroHead}</kbd>
        <br />
        <code className="text-light">{config.heroText}</code>
        <div>
          <span className="badge badge-warning">
            <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h3>

      <button
        className={"btn btn-primary btn-md active mt-4"}
        onClick={() => AlertIt()}
      >
        Telegram me
      </button>
      &nbsp;
      <button
        className={"btn btn-primary btn-md active mt-4"}
        onClick={() => EmailAlertIt()}
      >
        Email me
      </button>
    </div>
  );
}

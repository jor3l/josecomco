export default () => {
    let time = (new Date()).toLocaleTimeString().split(' ');
    time = `${time[0].substring(0, time[0].length - 3)} ${time[1]}`;
    return <div class="bar"> 
      <div class="start-button">
        <img alt="" src="data:image/png;base64,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" width="26" height="20"/>
        <span>Start</span>
      </div>
      <div class="time">
        <img alt="" src="data:image/png;base64,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" width="17" height="17"/>
        <span id="time">{time}</span></div>
     </div>;
}
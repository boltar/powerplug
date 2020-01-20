var SmartPlugPowerMonitor = require("../../index.js");

var smartPlugPowerMonitor = new SmartPlugPowerMonitor({
  smartPlugIP: "192.168.1.136", // miner plug ip
  iftttMakerChannelKey: "your_key_here",
  pollIntervalSeconds: 1,
  startTimeWindowSeconds: 3,
  endTimeWindowSeconds: 60*15, // 15 minutes
  startEventName: "rig started",
  endEventName: "rig down",
  pollingCallback: pollingData,
  wattsThreshold: 1,
  eventCallback: eventData
});

function pollingData(usage){
  console.log(usage.power);
}

function eventData(event, data){
  console.log(event, data);
}

smartPlugPowerMonitor.start();

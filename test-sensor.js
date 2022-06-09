const PoweredUP = require("node-poweredup");
const poweredUP = new PoweredUP.PoweredUP();

poweredUP.on("discover", async (hub) => {
    console.log(`Discovered ${hub.name}!`);
    await hub.connect();
    console.log(`Connected to ${hub.name}!`);

    hub.on("disconnect", () => {
        console.log(`Disconnected ${hub.name}`);
    })

    hub.on("tilt", (device, { x, y, z }) => { // work
        console.log(`Tilt detected on port ${device.portName} (X: ${x}, Y: ${y}${z !== "undefined" ? `, Z: ${z}`: ""})`);
    });

    hub.on("accel", (device, { x, y, z }) => { // no accelereometer
        console.log(`Accelerometer detected on port ${device.portName} (X: ${x}, Y: ${y}, Z: ${z})`);
    });

    const e = 'color';
    // hub.on("distance", (device, value) => {
    //     console.log(`Motion detected on port ${device.portName}`);
    //     console.log(value);
    // });

    // hub.on(e, (device, value) => {
    //     console.log(e + ' detected on port ' + device.portName);
    //     console.log(value);
    // });


    // hub.on("distanceCount", (device, value) => {
    //     console.log(`distanceCount detected on port ${device.portName}`);
    //     console.log(value);
    // });

    hub.on("reflect", (device, value) => {
        console.log(`reflect detected on port ${device.portName}`);
        console.log(value);
    });

    // hub.on("ambient", (device, value) => {
    //     console.log(`ambient detected on port ${device.portName}`);
    //     console.log(value);
    // });

    // hub.on("rgbIntensity", (device, value) => {
    //     console.log(`rgbIntensity detected on port ${device.portName}`);
    //     console.log(value);
    // });

    // hub.on("colorAndDistance", (device, value) => {
    //     console.log(`colorAndDistance detected on port ${device.portName}`);
    //     console.log(value);
    // });

    hub.on("rotate", (device, { degrees }) => {
        console.log(`Rotation detected on port ${device.portName} (Rotation: ${degrees})`);
    });

    hub.on("force", (device, { force }) => {
        console.log(`Force detected on port ${device.portName} (Force: ${force})`);
    });

    hub.on("button", ({ event }) => {
        console.log(`Green button press detected (Event: ${event})`);
    });

    hub.on("remoteButton", (device, { event }) => {
        console.log(`Remote control button press detected on port ${device.portName} (Event: ${event})`);
    });

    hub.on("attach", (device) => {
       console.log(`Device attached to port ${device.portName} (Device ID: ${device.type})`) ;
    });

    hub.on("detach", (device) => {
        console.log(`Device detached from port ${device.portName}`) ;
    });
});

poweredUP.scan(); // Start scanning for Hubs
console.log("Scanning for Hubs...");
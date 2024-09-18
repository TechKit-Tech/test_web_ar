/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

AFRAME.registerComponent('cloak', {
    init: function () {
        var geometry = new THREE.BoxGeometry(1.1, 0.2, 1.1);
        var material = new THREE.MeshBasicMaterial({ colorWrite: false });
        var cube = new THREE.Mesh(geometry, material);
        this.el.object3D.add(cube);
    }
});

function recStart() {
    console.log("print Click start");
    var recorder = document.querySelector('[recorder]');
    recorder.dispatchEvent(new CustomEvent('start'));
}

function recStop() {
    console.log("print Click stop");
    var recorder = document.querySelector('[recorder]');
    recorder.dispatchEvent(new CustomEvent('stop'));
}


// var RECORDING_ONGOING = false;
// var recordingToggle = document.getElementById("recording-toggle"); // The button

// recordingToggle.addEventListener("click", function () {
//     RECORDING_ONGOING = !RECORDING_ONGOING; // Start / Stop recording
//     if (RECORDING_ONGOING) {
//         recordingToggle.innerHTML = "Stop Recording";
//         startRecording(); // Start the recording
//     } else {
//         recordingToggle.innerHTML = "Start Recording";
//         stopRecording(); // Stop screen recording
//     }
// });

// var blob, mediaRecorder = null;
// var chunks = [];

// async function startRecording() {
//     var stream = await navigator.mediaDevices.getDisplayMedia({ video: { mediaSource: "screen" }, audio: true });

//     mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
//     mediaRecorder.ondataavailable = (e) => {
//         if (e.data.size > 0) {
//             chunks.push(e.data);
//         }
//     };
//     mediaRecorder.onstop = () => {
//         var filename = window.prompt("File name", "video"); // Ask the file name

//         blob = new Blob(chunks, { type: "video/webm" });
//         chunks = []; // Resetting the data chunks
//         var dataDownloadUrl = URL.createObjectURL(blob);

//         // Download it onto the user's device
//         let a = document.createElement('a');
//         a.href = dataDownloadUrl;
//         a.download = `${filename}.webm`;
//         a.click();

//         URL.revokeObjectURL(dataDownloadUrl);
//     };
//     mediaRecorder.start(250);
// }

// function stopRecording() {
//     mediaRecorder.stop(); // Stopping the recording
// }
let targetAngle = 0; // initial angle of target qubit
let controlAngle = 0; // initial angle of control qubit
let targetActive = false; // target qubit state
let controlActive = false; // control qubit state

function setQubitAngle(qubit, angle) {
  let x = Math.cos(angle) * 30;
  let y = Math.sin(angle) * 30;
  qubit.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;
}

function toggleTarget() {
  targetActive = !targetActive;
  let targetQubit = document.querySelector(".qubit.target");
  targetQubit.classList.toggle("active", targetActive);
}

function toggleControl() {
  controlActive = !controlActive;
  let controlQubit = document.querySelector(".qubit.control");
  controlQubit.classList.toggle("active", controlActive);
}

function applyGate() {
  let targetQubit = document.querySelector(".qubit.target");
  let controlQubit = document.querySelector(".qubit.control");

  // apply the gate only if the control qubit is active
  if (controlActive) {
    // apply X gate to target qubit
    targetAngle += Math.PI;
    setQubitAngle(targetQubit, targetAngle);

    // swap the states of the target and control qubits
    targetActive = !targetActive;
    controlActive = !controlActive;
    targetQubit.classList.toggle("active", targetActive);
    controlQubit.classList.toggle("active", controlActive);
  }
}

function reset() {
  targetAngle = 0;
  controlAngle = 0;
  targetActive = false;
  controlActive = false;

  let targetQubit = document.querySelector(".qubit.target");
  let controlQubit = document.querySelector(".qubit.control");

  setQubitAngle(targetQubit, targetAngle);
  setQubitAngle(controlQubit, controlAngle);

  targetQubit.classList.remove("active");
  controlQubit.classList.remove("active");
}

let targetQubit = document.querySelector(".qubit.target");
let controlQubit = document.querySelector(".qubit.control");

document.addEventListener("DOMContentLoaded", () => {
  setQubitAngle(targetQubit, targetAngle);
  setQubitAngle(controlQubit, controlAngle);
});

document.querySelector(".btn.toggle-target").addEventListener("click", toggleTarget);
document.querySelector(".btn.toggle-control").addEventListener("click", toggleControl);
document.querySelector(".btn.apply-gate").addEventListener("click", applyGate);
document.querySelector(".btn.reset").addEventListener("click", reset);

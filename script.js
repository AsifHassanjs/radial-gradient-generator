
const firstbtn = document.getElementById('first');
const secondbtn = document.getElementById('second');
const thirdbtn = document.getElementById('third');
const fourthbtn = document.getElementById('fourth');
const copied = document.getElementById('copycode');
const randomAllBtn = document.getElementById('asif-random-all');
const shapeSelect = document.getElementById('asif-shape-select');
const extentSelect = document.getElementById('asif-extent-select');
const positionSelect = document.getElementById('asif-position-select');

// Initial color and parameter state variables
var rgb1 = "#5C91E5";
var rgb2 = "#983FC6";
var rgb3 = '#9F55D2';
var rgb4 = '#AF64AA';
var currentShape = 'ellipse';
var currentExtent = 'farthest-corner';
var currentPosition = 'center';

// Function to generate a random HEX color code
const getcolor = () => {
  let hexavalues = '0123456789ABCDEF';
  let colors = '#';
  for (let i = 0; i < 6; i++) {
    colors = colors + hexavalues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

// Central function to update background and clipboard output code consistently
const updateRadialGradient = () => {
  const gradientValue = `radial-gradient(${currentShape} ${currentExtent} at ${currentPosition}, ${rgb1}, ${rgb2}, ${rgb3}, ${rgb4})`;
  document.getElementById("bodyy").style.backgroundImage = gradientValue;
  copied.innerText = gradientValue + ';';
};

// Event handlers for individual color buttons
const hndlfirst = () => {
  rgb1 = getcolor();
  firstbtn.style.backgroundColor = rgb1;
  firstbtn.innerText = rgb1;
  updateRadialGradient();
};

const hndlscnd = () => {
  rgb2 = getcolor();
  secondbtn.style.backgroundColor = rgb2;
  secondbtn.innerText = rgb2;
  updateRadialGradient();
};

const hndlthird = () => {
  rgb3 = getcolor();
  thirdbtn.style.backgroundColor = rgb3;
  thirdbtn.innerText = rgb3;
  updateRadialGradient();
};

const hndlfourth = () => {
  rgb4 = getcolor();
  fourthbtn.style.backgroundColor = rgb4;
  fourthbtn.innerText = rgb4;
  updateRadialGradient();
};

// Randomize all 4 colors at once
const handleRandomAll = () => {
  rgb1 = getcolor();
  rgb2 = getcolor();
  rgb3 = getcolor();
  rgb4 = getcolor();

  firstbtn.style.backgroundColor = rgb1;
  firstbtn.innerText = rgb1;
  secondbtn.style.backgroundColor = rgb2;
  secondbtn.innerText = rgb2;
  thirdbtn.style.backgroundColor = rgb3;
  thirdbtn.innerText = rgb3;
  fourthbtn.style.backgroundColor = rgb4;
  fourthbtn.innerText = rgb4;

  updateRadialGradient();
};

// Dropdown control handlers
const handleShapeChange = () => {
  currentShape = shapeSelect.value;
  updateRadialGradient();
};

const handleExtentChange = () => {
  currentExtent = extentSelect.value;
  updateRadialGradient();
};

const handlePositionChange = () => {
  currentPosition = positionSelect.value;
  updateRadialGradient();
};

// Function to copy the generated CSS code to clipboard
const copyy = () => {
  navigator.clipboard.writeText(copied.innerText);
  alert("Radial gradient code copied to clipboard!");
};

// Attaching event listeners
firstbtn.addEventListener('click', hndlfirst);
secondbtn.addEventListener('click', hndlscnd);
thirdbtn.addEventListener('click', hndlthird);
fourthbtn.addEventListener('click', hndlfourth);
randomAllBtn.addEventListener('click', handleRandomAll);
shapeSelect.addEventListener('change', handleShapeChange);
extentSelect.addEventListener('change', handleExtentChange);
positionSelect.addEventListener('change', handlePositionChange);
copied.addEventListener('click', copyy);

const REFINE_RATE = [
  { up: 1.0, down: 0.0, broke: 0.0 },
  { up: 0.5, down: 0.0, broke: 0.0 },
  { up: 0.33, down: 0.0, broke: 0.0 },
  { up: 0.25, down: 0.0, broke: 0.0 },
  { up: 0.25, down: 0.25, broke: 0.0 },
  { up: 0.25, down: 0.25, broke: 0.1 },
  { up: 0.2, down: 0.25, broke: 0.15 },
  { up: 0.2, down: 0.25, broke: 0.15 },
  { up: 0.2, down: 0.3, broke: 0.15 },
  { up: 0.2, down: 0.3, broke: 0.15 },
  { up: 0.2, down: 0.3, broke: 0.2 },
  { up: 0.2, down: 0.3, broke: 0.2 },
  { up: 0.15, down: 0.3, broke: 0.25 },
  { up: 0.15, down: 0.35, broke: 0.3 },
  { up: 0.15, down: 0.35, broke: 0.35 },
];

// refine return the next state
function refine(state) {
  const rate = REFINE_RATE[state.currentLv];
  const probability = Math.random();
  if (probability < rate.up) {
    return {
      ...state,
      currentLv: state.currentLv + 1,
      nUp: state.nUp + 1,
      nRefine: state.nRefine + 1,
    };
  } else if (probability < rate.up + rate.down) {
    return {
      ...state,
      currentLv: state.currentLv - 1,
      nDown: state.nDown + 1,
      nRefine: state.nRefine + 1,
    };
  } else if (probability < rate.up + rate.down + rate.broke) {
    return {
      ...state,
      nBreak: state.nBreak + 1,
      nRefine: state.nRefine + 1,
    };
  } else {
    return {
      ...state,
      nFailed: state.nFailed + 1,
      nRefine: state.nRefine + 1,
    };
  }
}

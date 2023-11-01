// Scroll to the top of the target element
function scrollToTarget(theTargetRef) {
  theTargetRef.current.scrollIntoView({ behavior: 'smooth' });
}

export default scrollToTarget;

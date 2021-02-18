//Insert level 9 code below
while (notDone()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathLeft()) {
      turnLeft();
    }
    moveForward();
  }
}

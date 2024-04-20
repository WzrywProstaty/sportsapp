import {
    EditActionWorkouts
}
// @ts-expect-error: TS can't resolve ~ mark here IDK why
from "~Shared/ui-kit";
function App() {
  let isActive = false;
  return (
    <>
      <EditActionWorkouts isActive={isActive} text={"wtf"}/>
    </>
  )
}

export default App

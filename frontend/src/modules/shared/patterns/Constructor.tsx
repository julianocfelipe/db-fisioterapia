import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const useConstructor = (callBack = () => {}) => {
    const [hasBeenCalled, setHasBeenCalled] = useState(false);
    if (hasBeenCalled) return;
    callBack();
    setHasBeenCalled(true);
  }

  export default useConstructor;


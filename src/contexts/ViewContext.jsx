import { createContext, useContext, useState } from "react";

const ViewContext = createContext({});

export const CameraModes = {
  free: "free",
  locked: "locked",
};

export const ViewProvider = ({ children }) => {
  const [cameraMode, setCameraMode] = useState(CameraModes.free);

  return (
    <ViewContext.Provider value={{ cameraMode, setCameraMode }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useView = () => {
  return useContext(ViewContext);
};

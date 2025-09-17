import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data.js";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const res = await featureFlagsDataServiceCall();
      setEnabledFlags(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error.message);
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  });
  return (
    <FeatureFlagsContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

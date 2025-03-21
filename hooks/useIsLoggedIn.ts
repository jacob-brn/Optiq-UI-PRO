import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const supabase = createClient();

  useEffect(() => {
    const checkUser = async () => {
      const { data: session } = await supabase.auth.getUser();
      if (session.user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkUser();
  }, []);

  return isLoggedIn;
};

export default useIsLoggedIn;

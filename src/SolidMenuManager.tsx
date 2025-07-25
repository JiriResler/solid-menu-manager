import { SessionProvider } from "@inrupt/solid-ui-react";
import IntlProviderWrapper from "./IntlProviderWrapper";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginSolid from "./LoginSolid/LoginSolid";
import MenuOverview from "./MenuOverview/MenuOverview";

/**
 * Wraps the application in necessary components and defines its routes.
 */
const SolidMenuManager: React.FC = () => {
  const queryClient = new QueryClient();

  const applicationBasePath = import.meta.env.DEV
    ? "/"
    : "/solid-menu-manager/";

  return (
    <SessionProvider restorePreviousSession>
      <IntlProviderWrapper>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={applicationBasePath}>
            <Routes>
              <Route path="/" element={<MenuOverview />} />
              <Route path="/login" element={<LoginSolid />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </IntlProviderWrapper>
    </SessionProvider>
  );
};

export default SolidMenuManager;

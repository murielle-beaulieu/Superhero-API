import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersFavouritesPage } from "./pages/UsersFavouritesPage";
import { BrowsePage } from "./pages/BrowsePage";
import { ModalContextProvider } from "./context/ModalContext";
import { SearchContextProvider } from "./context/SearchContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/all" element={<BrowsePage />} />
              <Route path="/favourites" element={<UsersFavouritesPage />} />
            </Routes>
          </BrowserRouter>
        </SearchContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
}

export default App;

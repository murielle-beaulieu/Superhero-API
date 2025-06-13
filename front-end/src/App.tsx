import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersFavouritesPage } from "./pages/UsersFavouritesPage";
import { BrowsePage } from "./pages/BrowsePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all" element={<BrowsePage />} />
          <Route path="/favourites" element={<UsersFavouritesPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

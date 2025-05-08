
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExistingCustomers from "./pages/ExistingCustomers";
import CombinedLanding from "./pages/CombinedLanding";
import WebinarRegistrationForm from "./components/webinar/WebinarRegistrationForm";
import StartFreeTrial from "./pages/StartFreeTrial";
import RegistrationsList from "./pages/RegistrationsList";
import AddWebinarForm from "./components/AddWebinarForm";
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import AdminNavbar from "./admin/AdminNavbar";
import Register from "./admin/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/existing-customers" element={<ExistingCustomers />} />
          <Route path="/combined" element={<CombinedLanding />} />
          <Route path="/webinar" element={<WebinarRegistrationForm />} />
          <Route path="/start-free-trail" element={<StartFreeTrial />} />
          <Route path="/registrations" element={<RegistrationsList />} />
          <Route path="/add-webinar-details" element={<AddWebinarForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-navbar" element={<AdminNavbar />} />
          <Route path="/Register" element={<Register />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

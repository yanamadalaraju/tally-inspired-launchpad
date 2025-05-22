
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
import SuccessPage from "./components/SuccessPage";
import FailurePage from "./components/FailurePage";
import ExistingCustomerNav from "./components/ExistingCustomerNav";
import RequestDemoTable from "./admin/Existing_Customers/RequestDemoTable";
import EditDemoRequest from "./admin/Existing_Customers/EditDemoRequest";
import AllPaymentsPage from "./pages/AllPaymentsPage";
import StatusPage from "./pages/StatusPage";
import SendEmailPage from "./components/newcustomer/SendEmailPage";
import EmailSender from "./components/newcustomer/Email";
import SendEmail from "./components/newcustomer/Email";
import Sendmail from "./components/newcustomer/Sendmail";
// import EmailForm from "./components/newcustomer/EmailForm";

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
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
          <Route path="/requestdemotable" element={<RequestDemoTable />} />
          <Route path="/edit-request/:id" element={<EditDemoRequest />} />
          <Route path="/allpayments" element={<AllPaymentsPage />} />
          <Route path="/payment" element={<StatusPage />} />
          <Route path="/sendmail" element={<SendEmailPage />} />
          {/* <Route path="/send" element={<EmailForm />} /> */}
          <Route path="/send" element={<Sendmail />} />
          
          
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

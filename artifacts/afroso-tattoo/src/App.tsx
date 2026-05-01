import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import {
  Navbar,
  Hero,
  About,
  Services,
  Gallery,
  GalleryPage,
  Process,
  Testimonials,
  Booking,
  Footer,
  Cursor,
  WhatsAppFloat
} from "./components";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={GalleryPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Cursor />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <WhatsAppFloat />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

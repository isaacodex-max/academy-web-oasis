import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import News from './pages/News';
import Contact from './pages/Contact';
import ApplicationForm from "./pages/ApplicationForm";
import AOS from "aos";
import "aos/dist/aos.css";
import PageWrapper from "./components/PageWrapper";
import Thankyou from "./pages/Thankyou";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <PageWrapper>
                    <Index />
                  </PageWrapper>
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                </Layout>
              }
            />
            <Route
              path="/news"
              element={
                <Layout>
                  <News />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/apply"
              element={
                <Layout>
                  <PageWrapper>
                    <ApplicationForm />
                  </PageWrapper>
                </Layout>
              }
            />
            <Route
              path="/thankyou"
              element={
                <Layout>
                  <PageWrapper>
                    <Thankyou />
                  </PageWrapper>
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

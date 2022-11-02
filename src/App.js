import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CollectionGrid from "./components/CollectionGrid";
import CollectionPage from "./components/CollectionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./normalize.css";
import "./style.css";

function App() {
    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key={Route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{ duration: 0.75 }}
                    variants={{ initialState: { opacity: 0 }, animateState: { opacity: 1 }, exitState: {} }}
                >
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<CollectionGrid />} />
                            <Route path="/collection/:project_id" element={<CollectionPage />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default App;
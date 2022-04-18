import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/feedbackContext";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    

    return (
       <FeedbackProvider>
            <Router>
        
        <Header text="Feedback UI" />
        <div className="container">
        <Routes>
        <Route exact path="/" element={
        <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList  />
        </>
        }>
        
        </Route>
        

        <Route path="/about" element={<About />} />
        </Routes>
        <AboutIconLink />
        </div>
        </Router>
       </FeedbackProvider>
    )
}

export default App
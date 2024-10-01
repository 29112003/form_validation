import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import FormPage from "./Components/FormPage"

import SubmissionPage from "./Components/SubmissionPage"

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<FormPage/>} />
            <Route path="/submission" element={<SubmissionPage/>} />
        </Routes>
    </Router>
  )
}

export default App;

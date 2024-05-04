import CssBaseline from "@mui/material/CssBaseline";//used to remove any pre-existing default css styles

import TodoList from "./TodoList";
import Navbar from "./Navbar";
export default function App() {

  return (
      <div>
        <CssBaseline/>
        <Navbar />
        <TodoList />
      </div>
  )
}


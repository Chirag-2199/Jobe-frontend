import JobList from "./components/JobList";
import "./App.css"; // Don't forget to import the CSS

export default function App() {
  return (
    <div className="app-container">
      <header>
        <h1 className="main-heading">🎓 Student Job Tracker</h1>
      </header>
      <main>
        <JobList />
      </main>
    </div>
  );
}

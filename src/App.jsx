import Student from './Student.jsx';
function App() {
  return(
  <>
<Student name="Tinbit Tefere" age={22} isStudent={true} />
<Student name="Tinbit Tefere" age={2} isStudent={false} />
<Student />
</>
  );
}

export default App

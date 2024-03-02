import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import List from './List.jsx'

function App() {
  const students =[
    {id: 1, name: "Shannon Keanu A. Yase", email: "shannonkeanu1@gmail.com"},
    {id: 2, name: "Edriane Amistoso", email: "edrianegwafo@gmail.com"},
    {id: 3, name: "Jule Brian Mortalla", email: "julegwafo@gmail.com"},
    {id: 4, name: "Andrea Lopez", email: "andreagwafa@gmail.com"},
    {id: 5, name: "John Doe", email: "john@doe.com"},
];
  return(
    <>
      <Header/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <List/>
      <Footer/>
      {students.length > 0 && <List items={students} category="Students"/>}
    </>
  );
  
}

export default App

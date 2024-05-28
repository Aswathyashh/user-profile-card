import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import UserProfile from './components/UserProfile';

function App() {
  const user = {
    name: "Aswathy",
    biography: "I am a software engineer with over three years of experience in the tech industry. Specializing in front-end development, I have a passion for creating beautiful and functional user interfaces. Beyond my professional expertise, I enjoy exploring new technologies and staying updated with the latest industry trends."
  };

  return (
    <div className="App">
      <UserProfile
        user={user}
        render={(user) => <UserCard user={user} />}
      />
    </div>
  );
}

export default App;

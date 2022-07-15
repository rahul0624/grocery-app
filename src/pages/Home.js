import CategoryList from "../components/CategoryList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";



const Home = () => {
  return (
    <div className="home-container">
      <NavBar/>
      <Header/>
      <CategoryList/>
    </div>
  );
};

export default Home;
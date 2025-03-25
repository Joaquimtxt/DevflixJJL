
import Footer from "../../components/footer/Footer"
import Recommended from "../../components/recommended/Recommended"
import MovieSelect from "../../components/movieSelect/MovieSelect"
import Category from "../../components/category/Category"

function Home() {
  const apiKey = "a59305243a429bc1b05bb414edddda32";
  const apiUrl = `https://developer.themoviedb.org/?apikey=${apiKey}`;
  return (
    <>
      <Recommended />
      <MovieSelect Titulo="Ação"/>
      <Category />
    </>
  )
}

export default Home

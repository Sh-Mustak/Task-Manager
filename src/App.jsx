import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import TaskBoard from "./component/Task/TaskBoard";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
      <Hero />
      <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

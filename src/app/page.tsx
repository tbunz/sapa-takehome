import Header from "./Header";
import Upcoming from "./Upcoming";
import ToKnow from "./ToKnow";

export default function Home() {
  return (
    <main className="min-h-screen flex-col flex">
     
      {/* <Header/>

      <div className="justify-center flex">
        <div className="m-2 text-xl lg:text-3xl text-greenTwo">Utah's Cannabis Community</div>
      </div>

      <Upcoming/> */}
      
      <ToKnow/>

    </main>
  );
}

import RenderProps from "./components/RenderProps";

function App() {
  return (
    <>
      <div>
        <RenderProps
          course={(isMyFavorit) => (isMyFavorit ? "react" : "laravel")}
        />
      </div>
    </>
  );
}

export default App;

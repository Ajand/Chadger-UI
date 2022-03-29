import Desktop from "./modules/layouts/Desktop";
import chains from "./modules/api/chains";
import useConnect from './modules/api/useConnect'

function App() {
  console.log(chains);


  return (
    <div class="bg-grey dark:bg-gray-900 w-full h-screen">
      <Desktop />
    </div>
  );
}

export default App;

import Desktop from "./modules/layouts/Desktop";
import Mobile from "./modules/layouts/Mobile";
import chains from "./modules/api/chains";
import useConnect from "./modules/api/useConnect";
import { Visible, Hidden } from "react-grid-system";

function App() {
  console.log(chains);

  return (
    <div class="bg-grey dark:bg-gray-900 w-full h-screen">
      <Visible xs sm md>
        <Mobile />
      </Visible>
      <Hidden xs sm md>
        <Desktop />
      </Hidden> 
    </div>
  );
}

export default App;

import Desktop from "./modules/layouts/Desktop";
import Mobile from "./modules/layouts/Mobile";
import chains from "./modules/api/chains";
import useConnect from "./modules/api/useConnect";
import { Visible, Hidden } from "react-grid-system";
import { BrowserRouter } from "react-router-dom";

function App() {
  console.log(chains);

  return (
    <BrowserRouter>
      <div className="dark">
        <div class="bg-grey dark:bg-gray-900 w-full min-h-fit ">
          <Visible xs sm md>
            <Mobile />
          </Visible>
          <Hidden xs sm md>
            <Desktop />
          </Hidden>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

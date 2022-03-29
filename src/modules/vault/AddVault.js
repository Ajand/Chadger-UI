import { Row, Col } from "react-grid-system";
import MDEditor from "@uiw/react-md-editor";

const AddVault = () => {
  return (
    <form>
      <Row>
        <Col lg={12}>
          <p className="font-mono text-gray-900 dark:text-gray-300 mb-4">
            Basic Info
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Vault Name
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Vault Symbol
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
      </Row>
      <div className="border-t mb-4 dark:border-gray-600 border-gray-200"></div>
      <Row>
        <Col lg={12}>
          <p className="font-mono text-gray-900 dark:text-gray-300 mb-4">
            Addresses
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Vault Token
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Keeper Address
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Guardian Address
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Treasury Address
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Badger Tree
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
      </Row>
      <div className="border-t mb-4 dark:border-gray-600 border-gray-200"></div>

      <Row>
        <Col lg={12}>
          <p className="font-mono text-gray-900 dark:text-gray-300 mb-4">
            Fees
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Strategist Perfomance Fee
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Governance Perfomance Fee
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Withdraw Fee
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Management Fee
            </label>
            <input
              type="text"
              id="email"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <div class="text-red-500 mt-1 text-xs">
              This is some help text that breaks onto a new line and may extend
              more than one line.
            </div>
          </div>
        </Col>
      </Row>
      <div className="border-t mb-4 dark:border-gray-600 border-gray-200"></div>

      <Row>
        <Col lg={12}>
          <p className="font-mono text-gray-900 dark:text-gray-300 mb-4">
            Metadata | Optional | You can set this in future
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div class="mb-6">
            <div class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300">
              User Guide
            </div>
            <MDEditor value={""} onChange={() => {}} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div class="mb-6">
            <div class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300">
              Strategy Diagram
            </div>
            <MDEditor value={""} onChange={() => {}} />
          </div>
        </Col>
      </Row>
      <div className="border-t mb-4 dark:border-gray-600 border-gray-200"></div>

      <button
        type="submit"
        class="text-white bg-blue-600 hover:bg-blue-700  focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Vault
      </button>
    </form>
  );
};

export default AddVault;

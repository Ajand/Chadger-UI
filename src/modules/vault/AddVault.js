import { Row, Col } from "react-grid-system";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { ethers } from "ethers";
import BeatLoader from "react-spinners/BeatLoader";

import upload from "../api/upload";

const AddVault = ({ registry }) => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  const [token, setToken] = useState("");
  const [keeper, setKeeper] = useState("");
  const [guardian, setGuardian] = useState("");
  const [treasury, setTreasury] = useState("");
  const [badgerTree, setBadgerTree] = useState("");

  const [spf, setSPF] = useState(1000);
  const [gpf, setGPF] = useState(1000);
  const [wf, setWF] = useState(100);
  const [mf, setMF] = useState(100);

  const [userGuide, setUserGuide] = useState("");
  const [strategyDiagram, setStrategyDiagram] = useState("");

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
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Vault Name
            </label>
            <input
              type="text"
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Curve XXX"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Vault Symbol
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CVX"
              required
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
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
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Vault Token
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            {!token
              ? ""
              : !ethers.utils.isAddress(token) && (
                  <div class="text-red-500 mt-1 text-xs">
                    Address is not valid
                  </div>
                )}
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Keeper Address
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={keeper}
              onChange={(e) => setKeeper(e.target.value)}
            />
            {!keeper
              ? ""
              : !ethers.utils.isAddress(keeper) && (
                  <div class="text-red-500 mt-1 text-xs">
                    Address is not valid
                  </div>
                )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Guardian Address
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={guardian}
              onChange={(e) => setGuardian(e.target.value)}
            />
            {!guardian
              ? ""
              : !ethers.utils.isAddress(guardian) && (
                  <div class="text-red-500 mt-1 text-xs">
                    Address is not valid
                  </div>
                )}
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Treasury Address
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={treasury}
              onChange={(e) => setTreasury(e.target.value)}
            />
            {!treasury
              ? ""
              : !ethers.utils.isAddress(treasury) && (
                  <div class="text-red-500 mt-1 text-xs">
                    Address is not valid
                  </div>
                )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Badger Tree
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={badgerTree}
              onChange={(e) => setBadgerTree(e.target.value)}
            />
            {!badgerTree
              ? ""
              : !ethers.utils.isAddress(badgerTree) && (
                  <div class="text-red-500 mt-1 text-xs">
                    Address is not valid
                  </div>
                )}
          </div>
        </Col>
      </Row>
      <div className="border-t mb-4 dark:border-gray-600 border-gray-200"></div>

      <Row>
        <Col lg={12}>
          <p className="font-mono text-gray-900 dark:text-gray-300 mb-4">
            Fees | They will be divided to 10000
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Strategist Perfomance Fee
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="200"
              required
              value={spf}
              onChange={(e) =>
                setSPF(
                  isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                )
              }
            />
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Governance Perfomance Fee
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={gpf}
              onChange={(e) =>
                setGPF(
                  isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                )
              }
            />
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Withdraw Fee
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={wf}
              onChange={(e) =>
                setWF(
                  isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                )
              }
            />
          </div>
        </Col>
        <Col lg={6}>
          <div class="mb-6">
            <label
              for=""
              class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300"
            >
              Management Fee
            </label>
            <input
              type="text"
              id=""
              class="bg-gray-50 focus:outline-0 font-omono border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
              value={mf}
              onChange={(e) =>
                setMF(
                  isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)
                )
              }
            />
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
            <MDEditor value={userGuide} onChange={setUserGuide} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div class="mb-6">
            <div class="block mb-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-300">
              Strategy Diagram
            </div>
            <MDEditor value={strategyDiagram} onChange={setStrategyDiagram} />
          </div>
        </Col>
      </Row>
      <div className="border-t mb-4 dark:border-gray-600 border-gray-200"></div>

      <button
        type="submit"
        class="text-white bg-blue-600 hover:bg-blue-700  focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          e.preventDefault()
          setLoading(true);
          const metadata = {
            userGuide,
            strategyDiagram,
          };
          upload(metadata)
            .then((cid) => {
              return registry.addVault(
                token,
                keeper,
                guardian,
                treasury,
                badgerTree,
                name,
                symbol,
                [gpf, spf, wf, mf],
                cid
              );
            })
            .then((e) => {
              console.log(e);

              // should navigate to home
              // alert success
            })
            .catch((err) => {
              setLoading(false);
              console.log(err);
            });
        }}
      >
        {loading ? <BeatLoader color="#f8f8f8" size={10} /> : "Add Vault"}
      </button>
    </form>
  );
};

export default AddVault;

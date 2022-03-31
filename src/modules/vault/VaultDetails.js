import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";
import ChadgerRegistry from "../api/Contracts/ChadgerRegistry.json";
import { Col, Row } from "react-grid-system";
import ReactMarkdown from "react-markdown";
import ApproveOrDepositDialog from "./ApproveOrDepositDialog";
import WithdrawDialog from "./WithdrawDialog";
import BeatLoader from "react-spinners/BeatLoader";

import VaultInfo from "./VaultInfo";
import VaultTabs from "./VaultTabs";
import VaultBasics from "./VaultBasics";
import VaultRewards from "./VaultRewards";

import BasicActions from "./BasicActions";
import YourRoles from "./YourRoles";
import RoleActions from "./RoleActions";

const VaultDetails = ({ network }) => {
  const [tab, setTab] = useState(0);

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [vault, setVault] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const [userGuide, setUserGuide] = useState("");
  const [strategyDiagram, setStrategyDiagram] = useState("");

  const [aod, setAod] = useState(null);
  const [wd, setWd] = useState(null);

  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const chadgerAddress = network.registryAddress;
    const cCo = new ethers.Contract(
      chadgerAddress,
      ChadgerRegistry.abi,
      signer
    );

    const signerAddress = await signer.getAddress();
    setUserAddress(signerAddress);
    const vault = await cCo.getVaultDetails(id, signerAddress);
    setVault(vault);

    axios
      .get(`https://ipfs.io/ipfs/${vault.metaPointer}`)
      .then((r) => {
        setUserGuide(r.data.userGuide);
        setStrategyDiagram(r.data.strategyDiagram);
      })
      .catch((err) => console.log(err));

    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <BeatLoader color="#4c1d95" size={30} />
      </div>
    );

  return (
    <div>
      {aod && <ApproveOrDepositDialog vault={vault} setVault={setAod} />}
      {wd && <WithdrawDialog vault={vault} setVault={setWd} />}
      <Row>
        <Col lg={8}>
          <VaultInfo vault={vault} />
        </Col>
        <Col lg={4}>
          <BasicActions setAod={setAod} setWd={setWd} />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Row>
            <Col lg={12}>
              <VaultTabs tab={tab} setTab={setTab} />
              {tab === 0 && (
                <>
                  <VaultBasics vault={vault} network={network} />
                  <VaultRewards vault={vault} network={network} />
                </>
              )}
              {tab === 1 && (
                <ReactMarkdown className="font-mono mt-4 text-gray-900 dark:text-gray-300">
                  {userGuide}
                </ReactMarkdown>
              )}
              {tab === 2 && (
                <ReactMarkdown className="font-mono  mt-4 text-gray-900 dark:text-gray-300">
                  {strategyDiagram}
                </ReactMarkdown>
              )}
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <YourRoles vault={vault} userAddress={userAddress} />
          <RoleActions />
        </Col>
      </Row>
    </div>
  );
};

export default VaultDetails;

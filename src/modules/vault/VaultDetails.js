import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";
import ChadgerRegistry from "../api/Contracts/ChadgerRegistry.json";
import { Col, Row } from "react-grid-system";

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

    setVault(await cCo.getVaultDetails(id, signerAddress));

    setLoading(false);
  }, []);

  if (loading) return <div>Loading ...</div>;

  console.log(vault);

  return (
    <div>
      <Row>
        <Col lg={8}>
          <VaultInfo vault={vault} />
        </Col>
        <Col lg={4}>
          <BasicActions />
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

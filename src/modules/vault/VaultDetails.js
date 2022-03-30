import { useState } from "react";
import { Col, Row } from "react-grid-system";

import VaultInfo from "./VaultInfo";
import VaultTabs from "./VaultTabs";
import VaultBasics from "./VaultBasics";

const VaultDetails = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <Row>
        <Col lg={8}>
          <VaultInfo />
        </Col>
        <Col lg={4}></Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Row>
            <Col lg={12}>
              <VaultTabs tab={tab} setTab={setTab} />
              {tab === 0 && <VaultBasics />}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default VaultDetails;

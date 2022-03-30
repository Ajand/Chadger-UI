import { Col, Row } from "react-grid-system";

const VaultInfo = () => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="text-violet-800 dark:text-yellow-300 font-mono text-lg">
            Vault Name:
          </div>
          <div className="text-violet-900 dark:text-yellow-300 font-mono text-2xl">
            To the Moon
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="flex flex-row-reverse mt-4 text-center">
            <div
              className="
                border-b-2 border-blue-400
                ml-8 mb-6 bg-blue-600 p-4 py-5 font-mono 
                text-gray-100 text-lg items-center flex 
                justify-between basis-1/3 "
            >
              <p className="mr-10"> TVL</p>
              <p>54,320$</p>
            </div>
            <div
              className="
              border-b-2 border-yellow-200 
              ml-8 mb-6 bg-yellow-300 p-4 py-5 
              font-mono text-gray-900 text-lg 
              items-center flex justify-between basis-1/3"
            >
              <p className="mr-10"> APY</p>
              <p>1,420%</p>
            </div>
            <div
              className="
                border-b-2 border-purple-600 
                mb-6 bg-purple-800 p-4 py-5 font-mono 
                text-gray-200 text-lg items-center flex justify-between basis-1/3"
            >
              <p className="mr-10">Deposits</p>
              <p>1,420%</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default VaultInfo;

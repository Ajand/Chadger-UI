import { Col, Row } from "react-grid-system";

const StrategistInfo = () => {
  const beautifyAddress = (address) =>
    `${address.substring(0, 10)}...${address.substring(
      address.length - 10,
      address.length
    )}`;

  return (
    <Row>
      <Col lg={4}>
        <div className="text-violet-800 dark:text-yellow-300 font-mono text-lg">
          Strategiest:
        </div>
        <a className="text-violet-900 dark:text-yellow-300 font-mono text-2xl">
          {beautifyAddress("0x4A87a2A017Be7feA0F37f03F3379d43665486Ff8")}
        </a>
      </Col>
      <Col lg={8}>
        <div className="flex flex-row-reverse">
          <div
            className="border-b-2 border-blue-400
        ml-8 mb-6 bg-blue-600 p-4 py-5 font-mono text-gray-100 text-lg flex justify-between"
          >
            <p className="mr-10">Total TVL</p>
            <p>54,320$</p>
          </div>
          <div
            className="border-b-2 border-yellow-200 
        mb-6 bg-yellow-300 p-4 py-5 font-mono text-gray-900 text-lg flex justify-between"
          >
            <p className="mr-10">Total APR</p>
            <p>1,420%</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default StrategistInfo;

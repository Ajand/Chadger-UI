import { Col, Row } from "react-grid-system";
import { useParams } from "react-router-dom";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const StrategistInfo = ({ strategists }) => {
  const beautifyAddress = (address) =>
    `${address.substring(0, 10)}...${address.substring(
      address.length - 10,
      address.length
    )}`;

  const { address } = useParams();

  const strategist = strategists.find((str) => str.strategist == address);

  console.log(strategist);

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
            <p>
              {numberWithCommas(
                strategist.vaults.reduce((pV, cV) => {
                  return pV + parseInt(cV.tvl);
                }, 0)
              )}
              $
            </p>
          </div>
          <div
            className="border-b-2 border-yellow-200 
        mb-6 bg-yellow-300 p-4 py-5 font-mono text-gray-900 text-lg flex justify-between"
          >
            <p className="mr-10">MAX APY</p>
            <p>
              {numberWithCommas(
                strategist.vaults
                  .map((vault) =>
                    vault.apyReports.reduce((pV, cV) => {
                      return pV + parseInt(String(cV.apy));
                    }, 0)
                  )
                  .sort((a, b) => b - a)[0]
              )}
              %
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default StrategistInfo;

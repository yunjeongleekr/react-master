import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  //   const params = useParams();
  //   console.log(params); //url
  const { coinId } = useParams<RouteParams>();
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;

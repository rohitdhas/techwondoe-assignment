import { useEffect } from "react";
import { useClient } from "./utils/contentful";
import Navbar from "./components/navbar";

function App() {
  const { client } = useClient();

  useEffect(() => {
    client
      .getAsset("1dvHDlPNVKqPNOL3LYfkOW")
      .then((asset) => console.log(asset))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

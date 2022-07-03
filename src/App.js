import axios from "axios";

const fetch = async () => {
  const resp = await axios.get(`/users/random_user`);
  const data = resp.data;
  console.log(data);
};

const App = () => {
  return (
    <div className="App">
      <button onClick={fetch}>Fetch Data</button>
    </div>
  );
};

export default App;

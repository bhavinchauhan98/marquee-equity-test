import { Link } from "react-router-dom";
import { axios } from "axios";
import './App.css';

function App() {
  const handleSearch = async () => {
    console.log('jjjjjjjjjjjjjjjjjjjjjjj');
    const options = {
      method: 'post',
      url: 'https://www.zaubacorp.com/custom-search',
      data: {
        filter: 'company',
        search: 'h'
      }
    };
    const response = await axios(options);
    console.log(response.data.toString());
  };

  return (
    <div className="container">
      <form className="row">
        <div className="col-4 mt-5">
          <input type="text" placeholder="Enter the keyword for the company" className="form-control"></input>
        </div>
        <div className="col-4 mt-5">
          {/* <Link to="/add-company"> */}
            <button
            type="submit"
            className="btn btn-primary"
            onClick = {handleSearch}
            >
              Search
            </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}

export default App;

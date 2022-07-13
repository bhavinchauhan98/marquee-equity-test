import { Link } from "react-router-dom";

const AddCompany = () => {
    return (
        <div className="container">
            <form className="row">
                <div className="col-4 mt-5">
                    <Link to="/"><button type="submit" class="btn btn-primary">Add a company</button></Link>
                </div>
            </form>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AddCompany;
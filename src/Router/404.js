import Layout from "../layouts/layouts";
import { Link } from "react-router-dom"; 
function A404(){
    return(
        <Layout>
            <div className="alert alert-danger text-center" role="alert">
                <p>404 Error: Page Missing</p>
                <Link to='/'>Click Here to be redirected</Link>
            </div>
        </Layout>
    )
}

export default A404
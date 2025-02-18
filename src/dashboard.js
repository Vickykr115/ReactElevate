import { useSelector } from "react-redux";
import RichTextEditor from "./richtext";



const Mydashboard = () => {
    let alluser = useSelector(state=>state.Userlist);
    
    return(
        <div className="container mt-4">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h3> React & Redux Dashboard </h3>
            </div>
        </div>
    
        <div className="row mt-5 text-center">
            
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                <div className="p-5 rounded-circle bg-primary text-white">
                    <h3> {alluser.length} - Users in Store </h3>
                </div>
            </div>
    
           
            <div className="col-xl-4 col-lg-4 col-md-6 mb-4">
                
            </div>
    
            
            <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="p-4 bg-light rounded shadow">
                    <RichTextEditor />
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Mydashboard;
import Sidebar from "../../components/sidebar/Sidebar";
import { SingelPost } from "../../components/singlePost/SingelPost";
import "./single.css";

export default function Single () {
    return (
        <div className="single">
            <SingelPost/>
            <Sidebar/>
        </div>
    )
}
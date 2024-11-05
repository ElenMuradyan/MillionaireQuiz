import { Spin } from "antd"

const Loading = ({ loading, children}) => {
    return(<div style={{width:'100%', height:'100vh'}}>
     {loading ? <Spin percent="auto" fullscreen></Spin> : children}
    </div>)
};

export default Loading;
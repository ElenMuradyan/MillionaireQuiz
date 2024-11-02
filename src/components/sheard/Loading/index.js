import { Spin } from "antd"

const Loading = ({ loading, children}) => {
    return(<>
     {loading ? <Spin percent="auto" fullscreen></Spin> : children}
    </>)
};

export default Loading;
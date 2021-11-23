import { Header } from "semantic-ui-react";

const MainHeader = ({title, element}) => {
    return <Header as={element}>{title}</Header>;
}

export default MainHeader

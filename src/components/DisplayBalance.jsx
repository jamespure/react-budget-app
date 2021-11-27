import { Statistic } from "semantic-ui-react";

const DisplayBalance = ({title, color, amount}) => {
    return (
      <Statistic size="tiny" color={color}>
        <Statistic.Label>{title}</Statistic.Label>
        <Statistic.Value>${amount}</Statistic.Value>
      </Statistic>
    );
}

export default DisplayBalance

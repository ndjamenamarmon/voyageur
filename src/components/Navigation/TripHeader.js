import React from "react";
import Header from "./Header";
import Meter from "../Meters/Meter";
import moment from "moment";
import {} from "twix";
import useBudgetCalculation from "../../hooks/useBudgetCalculation";
import styled from "styled-components";

const SubheaderContaienr = styled.div`
  position: relative;
`;

const SubheaderBackground = styled.div`
  background-image: url("${props =>
    props.photo}&w=300&h=100&fit=crop&crop=focalpoint");
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.6);
  height: 150px;
`;

const Subheader = styled.div`
  height: 150px;
  padding: 0 20px;
  color: #fff;
  font-size: 1em;
  font-weight: normal;
  position: absolute;
  width: 100%;
  top: 0;
`;

const SubheaderText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

const TripHeader = props => {
  const budgetItems = props.budgetItems.filter(
    bItem => bItem.tripId === props.trip._id
  );
  const expenses = props.expenses.filter(
    expense => expense.tripId === props.trip._id
  );

  const actual = useBudgetCalculation("actual", expenses);
  const budgeted = useBudgetCalculation("budgeted", budgetItems);

  const dates = moment(props.trip.startDate)
    .twix(props.trip.endDate, { allDay: true })
    .format({ monthFormat: "MMM", dayFormat: "D" });

  return (
    <React.Fragment>
      {props.trip && (
        <React.Fragment>
          <Header
            title={props.title}
            theme={props.theme}
            backTo={props.backTo}
            auth={props.auth}
          />
          <SubheaderContaienr>
            <SubheaderBackground photo={props.trip.photo} />
            <Subheader>
              <SubheaderText>
                <h2>{props.trip.destination}</h2>
                <h3>{dates}</h3>
              </SubheaderText>
              <Meter theme={props.theme} actual={actual} budgeted={budgeted} />
            </Subheader>
          </SubheaderContaienr>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TripHeader;

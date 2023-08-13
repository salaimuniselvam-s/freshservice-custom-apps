import React from "react";
import PropTypes from "prop-types";

const HelloUser = ({ client }) => {
  const showDetails = () => {
    client.data.get("ticket").then(
      function (data) {
        showNotification(
          `The ticket ${data.ticket.id} with the subject ${data.ticket.subject} is created by the contact ${data.ticket.requester_id}`
        );
      },
      function (error) {
        console.log("error", error);
      }
    );
  };

  const showNotification = (message) => {
    client.interface.trigger("showNotify", {
      type: "success",
      message: message,
    });
  };

  return (
    <div>
      <button onClick={showDetails}>Show Details</button>
    </div>
  );
};

HelloUser.propTypes = {
  client: PropTypes.object,
};
export default HelloUser;

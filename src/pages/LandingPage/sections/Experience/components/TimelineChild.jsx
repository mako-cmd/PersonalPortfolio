const TimelineChild = ({ date, name, description }) => {
  let handleActive = () => {
    switch_timeline_message(description);
  };

  //Changes the timeline message as well as opacity in a fade in out fashion
  let switch_timeline_message = (message) => {
    document.getElementsByClassName("timeline-writeup")[0].style.opacity = "0";
    setTimeout(() => {
      document.getElementsByClassName("timeline-writeup")[0].innerHTML =
        message;
      document.getElementsByClassName("timeline-writeup")[0].style.opacity =
        "1";
    }, 500);
  };

  let handleDeactive = () => {
    switch_timeline_message("Hover On A Timeline Item To Learn More");
  };

  return (
    <a
      title="Info On The Right"
      onMouseOver={handleActive}
      onMouseLeave={handleDeactive}
    >
      <p>
        <i>{date},</i>
        <span> </span>
        {name}
      </p>
    </a>
  );
};

export default TimelineChild;

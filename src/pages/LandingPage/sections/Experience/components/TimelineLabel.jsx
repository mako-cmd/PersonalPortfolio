const TimelineLabel = ({ link, label }) => {
  return (
    <>
      <a href={link ?? null} target="_blank" title="Link To Employer">
        {label ?? " * Unlabelled * "}
      </a>
    </>
  );
};

export default TimelineLabel;

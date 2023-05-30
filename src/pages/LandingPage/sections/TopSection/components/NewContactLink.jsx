const NewContactLink = ({ icon, link, label }) => {
  return (
    <p className=' text-lg'>
      {icon}
      &nbsp; &nbsp;
      <a href={link} target='_blank'>
        {label}
      </a>
    </p>
  )
}

export default NewContactLink

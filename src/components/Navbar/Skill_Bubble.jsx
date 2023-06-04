const Skill_Bubble = ({ label, iconSrc }) => {
  return (
    <span
      className=' text-base w-full rounded-full pt-3 pb-3 mr-1 flex place-content-center place-items-center'
      style={{ backgroundColor: '#E5E7EB' }}
    >
      <img className=' max-h-5 inline-block align-middle ml-4' src={iconSrc} />
      &nbsp;
      <span className='mr-4'>{label}</span>
    </span>
  )
}
export default Skill_Bubble

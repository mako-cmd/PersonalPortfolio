const Skill_Bubble = ({ label, iconSrc }) => {
  return (
    <span
      className=' text-base w-fit rounded-full pt-3 pb-3 m-1 flex place-content-center place-items-center hover:scale-105 transition-all'
      style={{ backgroundColor: '#E5E7EB' }}
    >
      <img className=' max-h-5 inline-block align-middle ml-4' src={iconSrc} />
      &nbsp;
      <span className='mr-4'>{label}</span>
    </span>
  )
}
export default Skill_Bubble

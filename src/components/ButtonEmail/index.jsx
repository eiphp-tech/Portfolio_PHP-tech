const EmailLink = ({ email, styleName }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div onClick={handleClick} className="cursor-pointer inline-block ">
      <p className={styleName}>{email}</p>
    </div>
  )
}

export default EmailLink

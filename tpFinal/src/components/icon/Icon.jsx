import './Icon.css'

const Icon =({icon}) => {
    return(
        <div className='icon'>
          <img src={icon.icon}/>
        </div>
    )

}

export default Icon;
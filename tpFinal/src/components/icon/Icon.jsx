import './Icon.css'

const Icon =({icon}) => {
    return(
        <div key={icon.id}className='icon'>
          <img src={icon.icon}/>
        </div>
    )

}

export default Icon;
import background from '../assets/bg.jpg'

const Background = () => {
  return (
    <img 
      src={background} 
      alt="background" 
      className="fixed inset-0 w-full h-full object-cover -z-50"
    />
  )
}

export default Background
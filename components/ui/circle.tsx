function CircleIndicator({active = false}) {
  return (<div
    className={`absolute left-1 top-1.5 w-3 h-3 rounded-full border-2 
                    border-accent ${active ? 'bg-white' : 'bg-black'}  
                    transition-colors`}
  />)
}

export {CircleIndicator}

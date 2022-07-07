import React, { Children } from 'react'

const List = (props:any) => {
    
    const play = JSON.parse(localStorage.getItem(props.props.list) || '{}')
    console.log(play);
    
  const handleRemove = (i:number)=>{
     for(let index=0;index<play.length;index++){
        if(index==i) play.splice(i,1)
     }
     localStorage.setItem(props.props.list,JSON.stringify(play))
     window.location.reload()
  }
    return (
        <div>
        <h1 className='text-6xl m-6 font-black'>Your Favourite Songs </h1>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {
            play=={}? <div>fdsfd</div>:
        Children.toArray(play.map((obj: any,i:number)=>{
          return <div className="flex flex-col items-center relative">
                  <button
                    className="absolute top-0 right-0 bg-blue-600 p-1 px-2 rounded-md"
                    onClick={()=>handleRemove(i)}
                  >
                    <span className="fa-solid fa fa-minus"
                    
                    ></span>
                  </button>
                  <img
                    src={obj.images.coverart}
                    alt=""
                    className="w-[50%] rounded-lg text-center"
                  />
                  <p className="text-xs font-bold">{obj.title}</p>   
          </div>
        }))}
      </div>
    
      </div>
      )
}

export default List
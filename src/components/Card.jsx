import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white rounded-xl h-72 w-72 mx-24 my-16 py-2 hover:scale-[1.02] cursor-pointer ">
      <img
        src={props.img}
        alt=""
        className="h-48 w-48 mx-10 my-4 rounded-full   "
      />
      <h1 className=" text-slate-800 text-lg font-semibold text-center font-mono">
        {props.name}
      </h1>
      {/* <div className='flex my-6 '>
    <div className='border cursor-pointer hover:text-white w-1/2 px-8 hover:bg-slate-600 bg-white text-center'> <a href={props.github} target='_blank'   > <i className='text-4xl fa fa-github'></i> </a></div>
    <div className='border cursor-pointer hover:text-white w-1/2 text-center px-8 hover:bg-slate-600 bg-white'> <a href={props.linkedin} target='_blank' > <i className='text-4xl fa fa-linkedin'></i> </a></div>
   </div>  */}
    </div>
  );
};

export default Card;

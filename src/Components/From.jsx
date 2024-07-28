function From ({close}){



    return <div className="bg-black bg-opacity-[50%] h-screen w-full top-0 absolute" >
<div className="flex justify-center pt-20">
<form className="bg-balck p-3 w-[400px rounded h-[410px] "> 


<i onClick={close} className="fa-solid fa-x absolute text-3xl    text-black"></i>


<input className="w-[350px] my-3 mt-10 border-2 border-black h-[40px] " type="text" name="" id="" placeholder="Enter titale" />  <br />
  <textarea className="border-2 border-black " rows={8} cols={46}/> <br />
     <button className="bg-black   text-white  px-[150px] my-5 py-2 text-3xl rounded ">Save</button>       
            
            </form>
</div>


    </div>
}



export default From
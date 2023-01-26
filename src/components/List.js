const List=(props)=>{


    if(props.list.length >0){
        const newList=props.list.map((item)=>
        {return(
            <div className="list-item"key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.feed}</p>
            </div>
        )
    })
    return(
        <div className="list-comp">
            {newList}
        </div>
    )

    }
   else return <p>No Item Avaliable</p>


}
export default List;
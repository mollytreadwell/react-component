//React component

 function Book({data}) {
    return (
      //  <div class="card" style="width: 18rem;">
      //  <img class="card-img-top" src="..." alt="Card image cap"/>
        <div class="card-body bg-text">
          <h4 class="b">{data.title}</h4>
          <p>{data.description}</p>
        
        <ul class="list"> 
          <li class="b">{data.author}</li>
          <li>{data.genre}</li>
        </ul>
        <div class="link">
            <a href={data.link}>Purchase on Amazon</a>
        </div>
        <div class="link">
        <img src={data.img} alt="Top Five"/>
        </div>
      </div>
    );
}
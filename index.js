import ReactDOM from 'react-dom/client';
import './index.css'
console.log("hello")
function card(key,thumbnail,title,price,description){
     return  <div id='product' key={key}>
    <img src={thumbnail} alt="iPhone" />
    <h2>{title}</h2>
    <label htmlFor="#h3">Price: $</label>
    <haa id='h3'> <b >{price}</b></haa>
    <p>{description}</p>
    
</div>}





// const container=[product,product,product,product,product,product,product]

const root = ReactDOM.createRoot(document.getElementById('root'));


fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>{
    // console.log(data)
    const container= data.products.map((products)=>{
        
        return card(products.key ,products.thumbnail,products.title,products.price,products.description) 
    })
    root.render(<div className='container'>{container} </div>)  

})
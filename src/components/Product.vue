<style>
.product-image{
    min-height: 200px;
}
.addtocart{
    width: 100% !important;
}
</style>
<template>

  <div class="row" id="product">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body text-danger text-center" style="font-size:40px">No Product Found!</div>
            </div>
        </div>
    </div>
    
</template>


<script>

import axios from "axios";

export default {
  name: 'Product',
  async created()
  {

    let html    = '';
    let src     = '';
    let arr     = [];
    let apiUrl  = 'http://127.0.0.1:8000';
    const res   = await axios.get('/api/products');
    if(res)
    {
        const products  = res.data.data;
        const container = document.getElementById('product');
        products.forEach(product => {
            console.log(product.image)
            src = apiUrl+'/products/'+product.image;
            if(product.image == null)  src ="../assets/product.png";
            html+=`
                <div class="col-md-3 my-3">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid product-image" src="${src}" />
                            <div>
                                <span>${product.title ?? ''}</span><br>
                                <span>TK ${product.unit_price}</span><br>
                                <button class="btn btn-dark text-center addtocart" data-id="${product.id}">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            // console.log(product)
        });

        container.innerHTML=html;
    }

    let bag = document.querySelector('.bag');

    let cartBtns = [... document.querySelectorAll('.addtocart')];
    cartBtns.forEach(btn=>{
        btn.addEventListener('click', function(){
            this.innerText="Added In Cart";
            arr.push(this.getAttribute('data-id'));
            bag.innerText=arr.length;
            localStorage.setItem('products',arr.length);
        })
    })

    let items = localStorage.getItem('products');
    items != undefined ? bag.innerText=items : 0;   

  }


  
}
</script>

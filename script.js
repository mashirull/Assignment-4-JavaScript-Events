var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599,
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
      ],

  }




for(var i in productData){
    var main_div=document.getElementById('main_div');
    if(i==='preview'){
        var left_div = document.createElement('div')
        left_div.classList.add('left_colomn')

        var img = document.createElement('img')
        img.classList.add('prev_img')
        img.id= 'prev_img'
        img.src =productData[i]
        left_div.appendChild(img)
        main_div.appendChild(left_div)
        
    }
    
    else if(i==='name'){
        var right_div = document.createElement('div')
        right_div.classList.add('right_colomn')
        var h1 = document.createElement('h1');
        h1.className= "name"

        var h1_text = document.createTextNode(productData[i])
        h1.appendChild(h1_text)

        right_div.appendChild(h1)
        main_div.appendChild(right_div)
    }
    else if(i==='brand'){
        var h4 = document.createElement('h3');
        h4.className ='brand'
        var h4_text = document.createTextNode(productData[i])
        h4.appendChild(h4_text)
        right_div.appendChild(h4)
        main_div.appendChild(right_div)
    }

    

    else if(i==='price'){
        var pr_h4 = document.createElement('h4');
        pr_h4.className= 'price'
        var pr_h4_text = document.createTextNode("Price: Rs ")
        pr_h4.appendChild(pr_h4_text)
        var span_tag = document.createElement('span')
        var span_text = document.createTextNode(productData[i]);
        span_tag.appendChild(span_text)
        pr_h4.appendChild(span_tag)
       
        right_div.appendChild(pr_h4)
        main_div.appendChild(right_div)
    }


    else if(i==='description'){
        var discpn_div = document.createElement('div');
        discpn_div.classList.add('description');
        var d_h3 = document.createElement('h3');
        d_h3.className='des_title'
        var h3_text = document.createTextNode('Description')
        d_h3.appendChild(h3_text)
        discpn_div.appendChild(d_h3)
        
        var p_tag = document.createElement('p');
        p_tag.className='d_para'
        var p_text = document.createTextNode(productData[i])
        p_tag.appendChild(p_text)
        discpn_div.appendChild(p_tag)

        right_div.appendChild(discpn_div)
    }

    else if(i==='photos'){
        var product_preview = document.createElement('div');
        product_preview.classList.add('product_priview');
        var title_h3 = document.createElement('h3');
        title_h3.className= 'pre_title'
        var title_h3_text = document.createTextNode('Product Preview');
        title_h3.appendChild(title_h3_text);

        product_preview.appendChild(title_h3);

        var previewing_imgs = document.createElement('div');
        previewing_imgs.classList.add('imgs_container');

        product_preview.appendChild(previewing_imgs)
        for(m=0;m<productData[i].length;m++){
            var img_tag = document.createElement('img')
            img_tag.classList.add('preview_img');
            img_tag.id = `img${m}`
            img_tag.setAttribute('onclick',`func2(img${m})`)
            img_tag.src = productData[i][m]
            previewing_imgs.appendChild(img_tag)  
            if(m==0){
                img_tag.setAttribute('style',' border: 2px solid rgb(0, 150, 136);')
            }
        }
        right_div.appendChild(product_preview)

       
        
    }
    
}



function func2(u){
    var g=document.getElementsByClassName('preview_img');
    var img_src = u.getAttribute('src')
    var prev_img = document.getElementById('prev_img')

    prev_img.setAttribute('src',img_src)
    
    for(z=0;z<g.length;z++){
        g[z].style.width = '12%'
        g[z].style.border =""
        
    }
    u.style.border = '2px solid rgb(0, 150, 136)';
    u.style.width = '11.5%'
   
}  











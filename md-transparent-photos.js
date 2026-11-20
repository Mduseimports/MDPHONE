/* MD PHONE — recortes reais e transparentes: produtos Apple, sem fundo branco. */
(function(){
 'use strict';
 var db=window.MD_UNIVERSE;
 if(!db||!Array.isArray(db.products))return;
 var photos=window.MD_PHOTOS||{};
 db.products.forEach(function(product){
  if(product.category!=='iphone'||!/^[a-z0-9-]+$/.test(product.id))return;
  var cutout='assets/md-cutouts/'+product.id+'.webp';
  product.image=cutout;
  photos[product.id]=cutout;
 });
 window.MD_PHOTOS=photos;
})();

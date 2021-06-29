const sender={
    store:[],
    receive(newData){
        this.store.push(newData);
    },
    send(){
        return this.store.pop();
    }

}
function f1(){
    return 1;
}

function f2(){
    return 2;
}

function f3(){
    return 3;
}

export {f1,f2,f3,sender};

// export {sender};

/*node.js de require kullanırken
browser modülünde import kullannmak
uyumsuzluk oluşturuyor. bunu engellemek için
package.json içinde js yi modüle olarak belirtmek
ya da node.js deki js dosyasını mjs olarak uzantılamak
çözer*/
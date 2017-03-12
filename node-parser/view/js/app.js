(() => {
    "use strict"
    const id = (data) => {
        return document.getElementById(data);
    }

    const http = (data) => {
        return fetch(data).then(resp => {
            return resp.json();
        })
    }

    const renderData = (data, url) => {
        let elem = id("app");

        data.forEach(e => {
            if(e.text && e.href) {
                elem.insertAdjacentHTML("beforeend",`
                    <div class="line">
                        <div class="block -left">
                            <a href="${url+decodeURIComponent(e.href)}" class="link">${e.text}</a>
                        </div>
                        <div class="block -right">
                            <span class="text">${decodeURIComponent(e.href)}</span>
                        </div>
                    </div>
                `)
            }
            
        })
    }

    const parse = () => {
        let url = id("link").value,
            regex = /^((https:\/\/)|(http:\/\/).)+/gm;

        if(!regex.test(url)) {
            alert("строка поиска должна начинаться с http:// || https://");
            return false;
        }

        http(`/api/parse?link=${url}`).then(data => {
            renderData(data, url);
        });
        
    }

    id("button").addEventListener("click", parse);

    
})()
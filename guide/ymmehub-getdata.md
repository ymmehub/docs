---
outline: deep
---

# このDocsについて
YMME Hubにアップロードされているプロジェクトを取得する際に使ってください。
## プラグイン一覧の取得方法
::: tip
この記事のコードではjQueryを利用しています。
:::
[ここ](https://ymme.f5.si/json/plugins.json)にあります。サンプル:
```javascript
// use jquery
$.getJSON("https://ymmehub.github.io/json/plugins.json", (data) => {
        for (let index = 0; index < data.plugins.length; index++) {
            $("#grid").append(
                `<div class="column is-half">
                <a id="cell" href="/item.html?file=${data.plugins[index].id}">
                    <div class="card is-fullheight">
                        <div class="card-image">
                            <figure class="image is-2by2 is-one-third">
                                <img src="/file/img/${data.plugins[index].id}/1.png" alt="thunbnail"  />
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content">
                                    <p class="title is-4">${data.plugins[index].name}</p>
                                    <p class="subtitle is-6">${data.plugins[index].author}</p>
                                    <div class="content">
                                        <p>${data.plugins[index].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                </div>
                `);
```
## プラグイン単体の取得方法
```ymme.f5.si/json/(プロジェクトのid).json```にあります。[プラグイン一覧の取得方法](#プラグイン一覧の取得方法)とかからIDを引っ張り出して使ってください。
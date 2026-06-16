# **Play 2 different games on the same Page!**

## **Games Available**
1. _Coin Flip_<br>
   ![A coin heads up](/imgs/heads.jpg)
2. _Higher or Lower_

## **Switch between games using the custom tabs!**
```js
class Tabs {
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e){
        //remove current active classes
        this.tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        //remove current active classes from content
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active')
        })
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active')
    }
}
```

[Unrelated Video](https://youtu.be/0JvRHZVTLyI?si=T920V2TTABpujbSF)

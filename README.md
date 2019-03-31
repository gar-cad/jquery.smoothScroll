# jquery.smoothScroll

A simple plugin that works in conjuction with Bootstrap's scrollspy feature. It scrolls the screen to the anchor tag rather than a direct link. It takes 2 parameter:

1. duration: The number of milliseconds the transition will take. Default: 800
2. addHash: Boolean stating wether to add the anchor tag to the URL. Default: false.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
<nav id="list-example" class="nav nav-pills my-2">
    <a class="nav-link active" href="#list-item-1">Item 1</a>
    <a class="nav-link" href="#list-item-2">Item2</a>
    <a class="nav-link" href="#list-item-3">Item 3</a>
    <a class="nav-link" href="#list-item-4">Item 4</a>
</div>
<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example px-5">
    <h4 id="list-item-1">Item 1</h4>
    <p>Bacon ipsum dolor amet cow fatback boudin tenderloin bresaola pork belly. Salami frankfurter boudin picanha. Frankfurter t-bone tongue fatback ribeye. Bresaola leberkas alcatra fatback tongue. Brisket turducken tail cow, sirloin swine prosciutto tenderloin fatback pork chop ball tip jowl porchetta.</p>
    <h4 id="list-item-2">Item 2</h4>
    <p>Rump fatback jerky hamburger tongue kielbasa swine t-bone leberkas pig jowl ham. Jowl flank tail ribeye biltong venison shoulder filet mignon tenderloin chuck pork chop ground round. Turkey alcatra biltong porchetta pancetta, pork chop picanha corned beef ham turducken fatback salami cupim. Cupim brisket tri-tip spare ribs kevin chicken. Ground round ribeye drumstick swine fatback, andouille porchetta jerky ham cupim kevin. Shoulder brisket ham hock, filet mignon drumstick pig prosciutto picanha sirloin kielbasa tenderloin boudin buffalo.</p>
    <h4 id="list-item-3">Item 3</h4>
    <p>Cow drumstick flank tri-tip short ribs bacon. Shank pancetta sausage beef ribs landjaeger. Ball tip turducken spare ribs, picanha pastrami cupim ground round drumstick pork chop prosciutto short loin bresaola sirloin. Tri-tip alcatra pork chop, flank ball tip brisket ham hock sausage bresaola ribeye. Fatback bacon porchetta, short loin corned beef shank tail salami. Flank capicola chicken, pig frankfurter turkey beef biltong meatball ham kielbasa fatback doner swine. Swine pork chop burgdoggen beef chicken, jerky turkey ribeye pork loin.</p>
    <h4 id="list-item-4">Item 4</h4>
    <p>Meatball pastrami short loin sausage, t-bone andouille tenderloin prosciutto cow venison cupim kielbasa rump chicken jerky. Brisket ribeye bacon shank, kielbasa short ribs swine beef capicola alcatra flank salami prosciutto cupim biltong. Pork loin porchetta pork chop jerky tail leberkas. Cow boudin chuck, capicola swine shankle pork chop pork. Pork andouille beef rump. Jerky jowl chuck, beef ribs ham hock leberkas pork chop pig corned beef flank spare ribs swine cow.</p>
</div>
```

##### javascript
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="../dist/jquery.smoothScroll.min.js"></script>
<script>
    $(function() {
        $('.scrollspy-example').smoothScroll();
    });
</script>
```

##### css
```
.scrollspy-example {
    position: relative;
    height: 200px;
    overflow: scroll;
}
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.smoothScroll/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details
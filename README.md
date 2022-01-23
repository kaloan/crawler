Not really a crawler. <br>

The point of this little page is quickly getting and displaying certain images from some sites. Let us see an example: <br>
The site [thousandwonders](https://www.thousandwonders.net/) has a lot of pretty pictures and we maybe found some that interest us, let's say [this one](https://static.thousandwonders.net/Pamir.Mountains.original.32103.jpg). Images with numbers close to 32100 are of mountains and we would like to see some more. <br>
Fill the field "Base directory/name" with "https://static.thousandwonders.net/Pamir.Mountains.original." . <br>
Fill the field "Image number for start" with the first image number you would like to see "32100". <br>
Fill the field "Supposed number of images" with up to how many images you would like to see (if there are that many) that follow the starting one, let's say "10". <br>
Fill the field "Extension" with ".jpg" <br>

Now all the images of the form `https://static.thousandwonders.net/Pamir.Mountains.original.<NUMBER>.jpg` will be displayed where NUMBER is an integer in [32100,32100+10). <br>

Useful for some other scenic sites, too! <br>
  
There are a couple of bugs that need polishing and I am tinking of maybe potentially adding another field that will somehow specify a "successor" function for the numbers. <br>

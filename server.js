show: function () 
    {
      this.clickcounter++; //counts clicks
 
      // eslint-disable-next-line
      for(const properties in this.textblock){ //checks amount of properties in textblock 
        if (this.clickcounter==this.iterator+1){
          // for loop to map all properties of Object
          for(const element in this.textblock[Object.keys(this.textblock)[this.iterator]]){
            
            // last element will passed to button inner html the rest in <p></p> of this component
            if(element<this.textblock[Object.keys(this.textblock)[this.iterator]].length - 1){
              document.getElementById('textblock').children[element].innerHTML = this.textblock[Object.keys(this.textblock)[this.iterator]][element]
              document.getElementById('textblock').children[element].classList.remove('opacity-0');
            } else {
              document.getElementById('b1').innerHTML = this.textblock[Object.keys(this.textblock)[this.iterator]][element]
            } 
          } // end for loop elements in array
        } //end if clickcounter == this.iterator +1
      }
      //iterate to next property of Object
      this.iterator++;

      //if clickcount is the same as the properties of Object -> scroll to next section and first property will be loaded again
      if(this.clickcounter>Object.keys(this.textblock).length){
        document.getElementById("technologies").scrollIntoView();
        this.clickcounter=0;
        this.iterator=0;
        this.show();
      } // end if clickcounter ==5
    } //end show()

  } //end methods
} //end data()
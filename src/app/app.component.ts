import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';

 tazzlist = [

  {
    id: 1,
    label: 'Paine',
    done: false,
    quantity: 2
  },
  {
    id: 2,
    label: 'Lapte',
    done: false,
    quantity: 2

  },
  {
    id: 3,
    label: 'Unt',
    done: false,
    quantity: 3
  }

];

add(newElementLabel: any, newElementQuantity: any)
{
  let newElement = {
    quantity: newElementQuantity,
    label: newElementLabel,
    done: false,
    id: this.tazzlist.length+1
  };
  this.tazzlist.push(newElement); 
}   

delete(element: { id: number; }) {
  this.tazzlist = this.tazzlist.filter(t => t.id !== element.id);
  
}

done(element: { done: boolean; }) {
  element.done = !element.done;
}

view(){
  let bool;
  if (this.tazzlist.length !==0 ) {bool=true;}
  else bool=false;
  return bool;
}


}

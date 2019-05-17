export class drag{
  isDrag = false;
  formElement = '';
  constructor(_element,cont){
    this._element = _element;
    this._cont = cont;
    this.registerEvents();
  }
  registerEvents(){
    this._element.addEventListener('mousedown',(e)=>this.mouseDown(e));
    this.getRootElement().addEventListener('mouseup',(e)=>this.mouseUp(e))
    this.getRootElement().addEventListener('mousemove',(e)=>this.mouseMove(e))
  }

  mouseDown(e){
    if(e.srcElement.nodeName==='LI'){
      let documneNode = e.srcElement.cloneNode(e.srcElement);
      let ul = document.createElement('ul');
      ul.appendChild(documneNode);
      this.formElement = ul;
    }
    this.isDrag = true;
  }
  mouseUp(e){
    if(this.isDrag){
      if(e.clientX >= 400 && e.clientX<= 735 ){
        this._cont.appendChild(this.formElement);
      }
    }
    this.isDrag = false;
  }
  mouseMove(e){
    if(this.isDrag){

    }
  }
  getRootElement() {
    return document.getElementsByTagName('html')[0];
  }
}

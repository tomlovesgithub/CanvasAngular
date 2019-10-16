import { ViewChild, HostListener, ElementRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-frame',
  templateUrl: './canvas-frame.component.html',
  styleUrls: ['./canvas-frame.component.scss']
})
export class CanvasFrameComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    Object.assign(this.canvas.nativeElement.style,{
      left:"0%",position:"absolute",top:"0%",background:"white",mixBlendMode:"luminosity"
    });
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.resize()
    this.positionsArr = [];
  }

  animate(e) {
    this.ctx.fillStyle = ["black", "white"][Math.random()*2];
    this.ctx.beginPath();
    this.ctx.arc(e.x, e.y, 50, 50, 360);
    this.ctx.fill();
    this.ctx.closePath()
  }

  addToArr(e){
    this.ctx.clearRect(0,0,this.canvas.nativeElement.width, this.canvas.nativeElement.height)
    // if (this.positionsArr[0] != undefined){
      // var lastLoc = (this.positionsArr[this.positionsArr.length-1].x + this.positionsArr[this.positionsArr.length-1].y)
      // var currentLoc = (e.clientX + e.clientY)
      // var movementAmm = Math.abs(lastLoc - currentLoc)
      // console.log(movementAmm)
      // if (movementAmm > 90) {
        this.positionsArr.push({x: e.clientX, y: e.clientY})
      // }
    // } else {
      // this.positionsArr.push({x: e.clientX, y: e.clientY})
    // }
    this.positionsArr.forEach(function(item) {
      // console.log(item)
      this.animate(item)
    }.bind(this));
    this.positionsArr.length > 50 ? this.positionsArr.shift() : null
  }

  resize(){
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize()
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e) {
    this.addToArr(e)
  }

}

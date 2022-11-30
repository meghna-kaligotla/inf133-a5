import { Component, OnInit } from '@angular/core';
import {  ElementRef,  ViewChild, Output, EventEmitter } from '@angular/core';
import * as handTrack from 'handtrackjs';
import { PredictionEvent } from '../../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  gesture: String = "";
  constructor() { }

  ngOnInit(): void {
  }
  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
  }

}
/*
This code was adapted from an open-source project distributed under the MIT license by Raj Gupta
https://codepen.io/rajdgreat007/pen/ZpZWbw
*/

var pomodoro = {
    started : false,
    mins : 0,
    secs : 0,
    init : function(){
      var self = this;
      this.minsDom = document.querySelector('#minutes');
      this.secsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#work').onclick = function(){
        self.startWork.apply(self);
      };
      document.querySelector('#break').onclick = function(){
        self.startBreak.apply(self);
      };
      document.querySelector('#stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },
    resetVariables : function(mins, secs, started){
      this.mins = mins;
      this.secs = secs;
      this.started = started;
    },
    startWork: function() {
      this.resetVariables(25, 0, true);
    },
    startBreak : function(){
      this.resetVariables(5, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      this.updateDom();
    },
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minsDom.innerHTML = this.toDoubleDigit(this.mins);
      this.secsDom.innerHTML = this.toDoubleDigit(this.secs);
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.secs == 0) {
        if(this.mins == 0) {
          this.timerComplete();
          return;
        }
        this.secs = 59;
        this.mins--;
      } else {
        this.secs--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
    }
};
window.onload = function(){
  pomodoro.init();
};

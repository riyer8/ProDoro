#! /usr/bin/env python3

from tkinter import *

def paint(event, color):
    x1, y1 = event.x-1, event.y-1
    x2, y2 = (event.x+1), (event.y+1)
    w.create_line(x1, y1, x2, y2, fill=color, width=4)

foreground_color = 'white'
marker_color = 'black'

# Create a window
root = Tk()

# Create a canvas
w = Canvas(root, background='#ffffff')
w.grid(column=0, row=1, columnspan=8) #Adjust to desired width
w.bind("<B1-Motion>", lambda event: paint(event, marker_color))
w.pack # boiler-plate: we always call pack() on tk windows

root.mainloop()
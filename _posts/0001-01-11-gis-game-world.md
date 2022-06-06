---
layout: project
title:  "GIS Game World"
date:   0001-01-11
excerpt: "Final project for Games Development degree program"
image: "/images/gis-game-world-title.png"
type: "Practicum"
---

### Using GIS Data to Automatically Generate a 3D Game World
<div class="box">
  <p>
    Real-world GIS data is used to automatically generate 3D geometry based on the player’s location in real life to create a themed game environment. The focus is on creating a tool to be used by game developers and artists to automatically generate a game world as opposed to the traditional method of almost entirely hand crafting each piece of geometry. The theme that the world will represent is ancient Egyptian and because the method will be designed modular, this could expand to include other themes such as medieval or sci-fi with minimal extra work. This project can generate the game world "on the fly" as well as having the capability of saving a set of generated geometry for loading and interacting with at a later time.
  </p>
  <p>
    The main goal of this project is the create a modular system for generating coherent game models automatically. The game models will specifically be buildings designed to become part of a game’s interactive environment. Not only should the system provide the ability to define a game model as a set of rules and parameters that define its construction, but it should also do so in an intuitive and modular fashion. This is to allow for easy modification and iteration, accommodating for the greatest variety between buildings with the smallest development cost.
  </p>

  <p>
    Generic shape grammar operations provide enough flexibility and articulation in order to accurately represent the common architectural features found during the research into ancient dwellings and temples. This could easily include other objects found in a game world including landmarks, vegetation, points of interest and more. The modularity of algorithms used means that new operations could easily be added to extend the type of geometry possible and in turn allow for architecture with different themes to be created. 
  </p>
</div>

<br/>

<div class="box">
  <p>
    Below is an example of a Shape Grammar file and it's processed result:
  </p>
</div>

<pre>
  <code>
// simple-temple-2-lg

Lot --> dup() { A : BaseA | B : BaseB }

BaseA --> taper(5, 3) comp() { Top: FirstLevelTop | Bottom : X | Front: X | Left: X | Right: X | Back: X | Extra: X }
FirstLevelTop --> offset(-3) { Inside: SecondLevelBase | Border: X }

SecondLevelBase --> taper(5, 3) comp() { Top: SecondLevelTop | Bottom : X | Front: X | Left: X | Right: X | Back: X | Extra: X }
SecondLevelTop --> offset(-3) { Inside: ThirdLevelBase | Border: X }

ThirdLevelBase --> taper(5, 3) comp() { Top: ThirdLevelTop | Bottom : X | Front: X | Left: X | Right: X | Back: X | Extra: X }
ThirdLevelTop --> offset(-3) { Inside: TopLevelBase | Border: X }

TopLevelBase --> dup() { A : TopLevelBaseA | B : TopLevelBaseB }
TopLevelBaseB --> dup() { A : TopLevelRoofBase | B : X }
TopLevelBaseA --> taper(5, 1) split(x) { 0.2 : TopLevelWallA | 0.6 : TopLevelBaseMiddle | 0.2 : TopLevelWallA }
TopLevelBaseMiddle --> split(z) { 0.2 : TopLevelDoorway | 0.6 : NIL | 0.2 : TopLevelDoorway }
TopLevelDoorway -->  split(x) { 0.2 : X | 0.6 : NIL | 0.2 : X }
TopLevelRoofBase --> extrude(5) comp() { Top: TopLevelRoof | Bottom : NIL | Front: NIL | Left: NIL | Right: NIL | Back: NIL | Extra: NIL }
TopLevelRoof --> offset(-0.5) { Inside: Roof | Border: NIL }
Roof --> taper(1, 0.5) rotate(local, 180, 0, 0)

BaseB --> offset(-13) { Inside: StairsBaseInner | Border: NIL }
StairsBaseInner --> extrude(15) split(x) { 0.2 : StairsBaseInnerSideA | 0.6 : StairsBaseInnerMiddle | 0.2 : StairsBaseInnerSideB }
StairsBaseInnerMiddle --> split(z) { 0.2 : StairsBaseInnerMiddleA | 0.6 : X | 0.2 : StairsBaseInnerMiddleB }
StairsBaseInnerSideA --> split(z) { 0.2 : NIL | 0.6 : StairsBaseInnerSideSectionA | 0.2 : NIL }
StairsBaseInnerSideB --> split(z) { 0.2 : NIL | 0.6 : StairsBaseInnerSideSectionB | 0.2 : NIL }
StairsBaseInnerMiddleA--> comp() { Top: X | Bottom : X | Front: X | Left: X | Right: X | Back: BackStairs | Extra: X }
StairsBaseInnerMiddleB--> comp() { Top: X | Bottom : X | Front: FrontStairs | Left: X | Right: X | Back: X | Extra: X }
StairsBaseInnerSideSectionA --> comp() { Top: X | Bottom : X | Front: X | Left: LeftStairs | Right: X | Back: X | Extra: X }
StairsBaseInnerSideSectionB --> comp() { Top: X | Bottom : X | Front: X | Left:  X | Right: RightStairs | Back: X | Extra: X }

FrontStairs --> stair(forward, 10)
BackStairs --> stair(back, 10)
LeftStairs --> stair(left, 10)
RightStairs --> stair(right, 10)
  </code>
</pre>

<!--<span class="image fit"><a href="/images/6_Control-Building_simple-temple-2-lg.png" target="_blank"><img src="/images/6_Control-Building_simple-temple-2-lg.png" alt=""></a></span>-->

<div class="box alt">
  <div class="row 50% uniform">
    <div class="4u"><span class="image fit"><a href="{{ "/images/building-1.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-1.png" | absolute_url }}" alt="" /></a></span></div>
    <div class="4u"><span class="image fit"><a href="{{ "/images/building-2.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-2.png" | absolute_url }}" alt="" /></a></span></div>
    <div class="4u$"><span class="image fit"><a href="{{ "/images/building-3.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-3.png" | absolute_url }}" alt="" /></a></span></div>
    <!-- Break -->
    <div class="4u"><span class="image fit"><a href="{{ "/images/building-4.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-4.png" | absolute_url }}" alt="" /></a></span></div>
    <div class="4u"><span class="image fit"><a href="{{ "/images/building-5.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-5.png" | absolute_url }}" alt="" /></a></span></div>
    <div class="4u$"><span class="image fit"><a href="{{ "/images/building-6.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-6.png" | absolute_url }}" alt="" /></a></span></div>
    <!-- Break -->
    <div class="4u"><span class="image fit"><a href="{{ "/images/building-7.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-7.png" | absolute_url }}" alt="" /></a></span></div>
    <div class="4u"><span class="image fit"><a href="{{ "/images/building-8.png" | absolute_url }}" target="_blank"><img src="{{ "/images/building-8.png" | absolute_url }}" alt="" /></a></span></div>
   <!-- <div class="4u$"><span class="image fit"><img src="{{ "/images/building-1.png" | absolute_url }}" alt="" /></span></div>-->
  </div>
</div>

<br/>

<div class="box">
  <p>
    In action: building footprints taken from OpenStreetMap using a mobile device's GPS coordinates and processing them using pre-designed Shape Grammar files.
  </p>
</div>
<span class="image fit"><a href="/images/game-scene-1.png" target="_blank"><img src="/images/game-scene-1.png" alt=""></a></span>

<span class="image fit"><a href="/images/game-scene-2.png" target="_blank"><img src="/images/game-scene-2.png" alt=""></a></span>

<span class="image fit"><a href="/images/game-scene-3.png" target="_blank"><img src="/images/game-scene-3.png" alt=""></a></span>

<hr/>
<p class="textcenter">Note: this project is currently under review and is subject to change.</p>
<hr/>

<h2>LINKS</h2>

<ul class="actions fit">
  <li><a href="https://github.com/rdieno/gisgameworld" target="_blank" class="button fit icon fa-github largefont">Github</a></li> 
</ul>
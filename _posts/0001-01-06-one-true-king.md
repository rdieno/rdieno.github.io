---
layout: project
title:  "One True King"
date:   0001-01-06
excerpt: "Global Game Jam 2019 Submission"
image: "/images/one-true-king-1.png"
type: "Game Jam"
---

### Classic Royal warfare

<div class = "box">
  <p>A submission for Global Game Jam 2019. With a team of 2 people, we challenged ourselves to create a game using only a regular deck of cards. Although there are flaws, the final result ended up being really fun! </p>
</div>

<p>
  <b>Win condition:</b> Remove the other player's King from the board. 
</p>


<p>
  <b>How to start:</b>
</p>



<li>Remove jokers and face cards from the pack. Set aside one black king and one red king for play.</li>

<li>Mix deck and place cards in a 7x5 grid pattern, alternating between facedown and face up cards. There should be 5 left over. Refer to stellar diagram below.</li>

<div class="6u 12u$(small)">
<pre>
  <code>

D = Face Down    U = Face Up

D U D U D U D

U D U D U D U

D U D U D U D

U D U D U D U

D U D U D U D

  </code>
</pre>
</div>


<li>Sum the values of the red numbers and record (or remember). Do the same for the black numbers. Whoever has the higher number has the advantage. If the difference is greater than 10, 'overwrite' the advantaged player's greatest value card with the next card from the deck (leftover cards from step 2). Keep overwriting the next highest card till the difference is 10 or less. If all 5 cards are used, that is the field you will play with. </li>

<li>Player with disadvantage places their King on a space on one of the peripheral face down cards. Then the other places their King on one of the remaining peripheral face down cards. </li>

<li>Ready to start! The player with lowest sum will go first.</li>

<br/>

<p>
   <b>How to play:</b> Two player game; players alternate turns moving one card onto one space away, horizontal or vertical to its current position.
</p>


<p>
  <b>Moving:</b>
</p>


<li>You can move any one of your cards (indicated by color) one space horizontally or vertically.
<li>You can move onto enemy cards (which means you attack them) </li>
<li>Move onto a face-down card (this does not trigger anything) </li>
<li>Move onto one of your cards, this space has the combined strength of both your cards. But, if you attack another space from this space, it does not count the total strength, just the card you moved. You can only move the top card of this space to another space. <b>NOTE:</b> a space can only hold two cards simultaneously. This means you cannot have a face-down card, and two or more face-up cards on one space at a time.</li>

<br/>

<p>
  <b>Attacking:</b>
</p>

<li>You can attack an enemy card by moving your card onto their space. A card wins if their total strength is greater then the enemy's strength. 
<li>If there is a face-down card under the enemy card: The facedown card is flipped when its position is attacked.
<li>If the card color matches your color, it adds to your card's strength. If the card matches the enemy's color, it adds to their strength.</li>
<li>The defeated card and the flipped card are both removed from play after calculating the result. If the attack strengths between your card and your enemy are equal, the attacker has the advantage. i.e. the attacker will win.</li>
<br/>

<p>
  <b>The KING:</b>
</p>

<li>The value of your King is equal to your opponent's strongest card (not including their King). </li>
<li>The King can move like any other card, except they cannot move onto another one of your faceup cards. </li>
<li>The King can attack and kill the other King, regardless of strength.</li>




<hr/>
<h2>LINKS</h2>

<ul class="actions fit">
  <li><a href="https://globalgamejam.org/2019/games/one-true-king" target="_blank" class="button fit icon fa-globe largefont">GGJ</a></li>
</ul>


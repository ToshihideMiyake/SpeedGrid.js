# <a href="https://toshihidemiyake.github.io/SpeedGrid/" target="_blank">SpeedGrid</a>
micro-library for  CSS Flexbox and CSS Grid

<img src="https://github.com/ToshihideMiyake/images/blob/main/speedgrid-eyecatch.png" style="width:80%;">

## Overview
SpeedGrid dynamically generates inline CSS by specifying the class name.
<li><b>Easy maintenance</b> --CSS Flexbox and CSS Grid layout can be changed without editing CSS.</li>
<li><b>Super-Lightweight</b>--SpeedGrid is just 4KB.(minified one is 3KB)</li>
<li><b>Rapid layout experience</b>--You can use the Flexbox&Grid system intuitively.</li>

## Usage

### Flexbox

Describe the class name in the container.<br>Class names should be created by combining `flex`, `xxx`, and `yyy`.<br>
Each of them have to be connected with `-`.

・`flex`--corresponds to `display:flex;`.<br>
・`xxx` --corresponds to `justify-content`.<br>
・`yyy`--corresponds to `align-items`.<br>

<table>
  <tr>
    <th colspan="2"><b>XXX</b></th>
      <th colspan="2"><b>YYY</b></th>
  </tr>
   <tr align="center">
     <td><b>strings</b></td>
     <td><b>CSS</b></td>
     <td><b>strings</b></td>
     <td><b>CSS</b></td>
  </tr>
   <tr align="center">
     <td>left-</td>
      <td>justify-content:flex-start;</td>
      <td>-top</td>
      <td>align-items:flex-start;</td>
  </tr>
   <tr align="center">
     <td>center-</td>
      <td>justify-content:center;</td>
      <td>-middle</td>
      <td>align-items:center;</td>
  </tr>
   <tr align="center">
     <td>right-</td>
      <td>justify-content:flex-end;</td>
      <td>-bottom</td>
      <td>align-items:flex-end;</td>
  </tr>
   <tr align="center">
      <td>between-</td>
      <td>justify-content:space-between;</td>
      <td></td>
      <td></td>
  </tr>
   <tr align="center">
     <td>around-</td>
      <td>justify-content:space-around;</td>
      <td></td>
      <td></td>
  </tr>
   <tr align="center">
     <td>evenly-</td>
      <td>justify-content:space-evenly;</td>
      <td></td>
      <td></td>
  </tr>
</table>

<br>
If you write the class name in the container like  <code>&lt;div class="flex-center-middle">&lt;/div></code>, the actual output will look like this:<br><br>

```html
<div class="flex-center-middle" style="display: flex; justify-content: center; align-items: center;"></div>
```
 
 <br>
 
※It is also possible to specify only one of `flex` or `flex-xxx` or `flex-yyy`.

<hr>

### Grid

Describe the grid area with grid lines of the X and Y axes, as the class name in child elements.
Grid-start and grid-end are specified with a slash.
Whitespace before and after the slash is not required.
You have to do the work of setting up the `display:grid;` and grid tracks for the container by yourself.
Gridlines must be less than 10.

<br>
<img src="https://github.com/ToshihideMiyake/images/blob/main/grid.screenshot.png" style="width:50%;">

<br>
If you write the class name in the child elements like  <code>&lt;div class="grid-x-2/4 grid-y-3/4">&lt;/div></code>, the actual output will look like this:<br><br>

```html
<div class="grid-x-2/4 grid-y-3/4" style="grid-area: 2 / 3 / 4 / 4;"></div>
```
 
 <hr>
 
 ### gap
 
 You can specify the gap property for Flexbox and Grid. The easiest way to use this is to simply specify <code>gap-nn</code> (nn=number) in the class name. You can also specify each gap for the horizontal and vertical axes by using the prefix <code>gapx-</code>,<code>gapy-</code>. You can use px, %, or em as the unit. px is used by default, but you can specify the unit by adding <code>per</code> or <code>em</code> between <code>gap-</code> and <code>-nn.</code>
 
#### Simple Usage

gap-nn (nn=number)

#### Options

<li>gapx-nn</li>

<li>gapy-nn</li>

<li>gap-per-nn</li>

<li>gapx-per-nn</li>

<li>gapy-per-nn</li>

<li>gap-em-nn</li>

<li>gapx-em-nn</li>

<li>gapy-em-nn</li>

<hr>
more details --> <a href="https://toshihidemiyake.github.io/SpeedGrid/" target="_blank">https://toshihidemiyake.github.io/SpeedGrid/</a>



<br>
support --><a href="https://www.buymeacoffee.com/myktoshihide" target="_blank">Buy me a coffee</a>
 

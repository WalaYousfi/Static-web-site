let list=[`    <div class="testimony">
<p>Excellent service! The delivery was incredibly fast, and the food quality exceeded my expectations. I'll definitely order again.</p>

<img src="images/profil2.jpeg" alt="" class="profil_photo">
<h4>Laura Markos</h4>
<p style="margin-top: -10px;">May 16,2020</p>


</div>`,
`
<div class="testimony js_next"  >
    <p>Very fast delivery. I recommend to everyone. The food is very hot and fresh and also as tasty as in a restaurant. The application is very convinient and understandable.</p>
    
    <img src="images/profil pfoto.webp" alt="" class="profil_photo">
    <h4>Sylvia Bituchini</h4>
    <p style="margin-top: -10px;">May 16,2020</p>
    

</div>`,
`    <div class="testimony js_next"  >
<p>Highly recommended! The variety of dishes on the menu is impressive, and the taste is outstanding. The app is user-friendly and convenient to use.</p>

<img src="images/profil3.jpeg" alt="" class="profil_photo">
<h4>Lee Markos</h4>
<p style="margin-top: -10px;">May 1,2022</p>


</div>`,
`    <div class="testimony js_next"  >
<p>Outstanding experience every time! I love the quality and flavor of the food. The app's interface is user-friendly, making the ordering process smooth.</p>

<img src="images/profil4.jpeg" alt="" class="profil_photo">
<h4>Jean Croft</h4>
<p style="margin-top: -10px;">August 13,2021</p>


</div>`
]
let j=0;

display_comment();
function display_comment(){
  const nextComment=list[j];
 const jsnextComment= document.querySelector('.js_next_comment');

 jsnextComment.style.animation='none';
jsnextComment.offsetHeight;
jsnextComment.style.animation=null;

jsnextComment.innerHTML=nextComment;

jsnextComment.style.animation='slide-comments-right 1s ease';


  j=(j+1)%list.length;
}
function display_comment_2(){
  j = (j - 1 + list.length) % list.length;

  const previousComment=list[j];
  const jsPreviousComment=document.querySelector('.js_next_comment');

  jsPreviousComment.style.animation='none';
  jsPreviousComment.offsetHeight;
  jsPreviousComment.style.animation=null;

  jsPreviousComment.innerHTML=previousComment;

  jsPreviousComment.style.animation='slide-comments-left 1s ease';



}






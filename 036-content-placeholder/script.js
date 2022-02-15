const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date'); 
const animateBgs = document.querySelectorAll('.animated-bg');
const animateBgsTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500);

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" alt="macbook">';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque nemo fugit optio qui nihil';
  profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="avatar author" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Feb, 15, 2022';
  animateBgs.forEach(bg => bg.classList.remove('animated-bg'));
  animateanimateBgsTextsBgs.forEach(bg => bg.classList.remove('animated-bg-text'));
}
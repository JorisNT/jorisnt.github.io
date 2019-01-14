'use strict';

const onLoad = () => {
  setTimeout(() => {
    const loadDiv = document.getElementById('loader-first');
    loadDiv.style.display = 'none';
  }, 300);
}
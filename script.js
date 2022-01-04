const enter = document.getElementById('enter');

window.addEventListener('keydown', (e) => {
	enter.innerHTML = `<div class="key">
  ${e.key}
  <small>event.key</small>
</div>
<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});
